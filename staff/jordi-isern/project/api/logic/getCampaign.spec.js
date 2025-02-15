import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import { expect } from 'chai'
import { Types } from 'mongoose'
import {Campaign, User } from '../data/models/index.js'
import getCampaign from './getCampaign.js'
import { ContentError, NotFoundError } from 'com/errors.js'
import { campaign } from '../data/models/Campaign.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types


describe('getCampaign',() => {
    before(() => mongoose.connect(MONGODB_URL_TEST)
        .then(()=> Promise.all([Campaign.deleteMany(), User.deleteMany()])))

    beforeEach(() => Promise.all([User.deleteMany(), Campaign.deleteMany()]))

    it('success on find Campaing',() => {
        return bcrypt.hash('123123123', 8)
            .then(hash =>  User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role:'master', password: hash }))
                .then(user => {
                    const userId = user._id.toString()
                    const testCampaign1 = {
                        author: userId,
                        title: "The Lost Kingdom",
                        background: "A kingdom long forgotten, buried under the sands of time. The ruins hide secrets that could change the world.",
                        objective: "Recover the ancient relic that can bring peace or destruction.",
                        startLocation: new ObjectId(),
                        image: "https://example.com/images/lost_kingdom.png"
                    }

                    return Campaign.create(testCampaign1)
                    .then((campaignToFind) => {
                        return getCampaign(userId, campaignToFind._id.toString())
                            .then(campaign => {
                                expect(campaign).to.exist
                                expect(campaign.id.toString()).to.equal(campaignToFind._id.toString())
                                expect(campaign.title).to.equal(testCampaign1.title)
                                expect(campaign.background).to.equal(testCampaign1.background)
                                expect(campaign.objective).to.equal(testCampaign1.objective)
                                expect(campaign.startLocation).to.deep.equal(testCampaign1.startLocation)
                                expect(campaign.image).to.equal(testCampaign1.image)
                            })
                    })
                })
    })

    it('fails on non-existing User',() => {
        let errorThrown
         return bcrypt.hash('123123123', 8)
            .then(hash =>  User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role:'master', password: hash }))
                .then(user => {
                    const userId = user._id.toString()
                    const testCampaign1 = {
                        author: user._id.toString(),
                        title: "The Lost Kingdom",
                        background: "A kingdom long forgotten, buried under the sands of time. The ruins hide secrets that could change the world.",
                        objective: "Recover the ancient relic that can bring peace or destruction.",
                        startLocation: new ObjectId(),
                        image: "https://example.com/images/lost_kingdom.png"
                    }

                    return Campaign.create(testCampaign1)
                    .then((campaignToFind) => {
                        return getCampaign(new ObjectId().toString(), campaignToFind._id.toString())
                        .catch(error => errorThrown = error)
                        .finally(() => {
                            expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                            expect(errorThrown.message).to.equal('User not found')
                        })
                    })
                })
    })
    
    it('fails on non-existing campaign',() => {
        let errorThrown
         return bcrypt.hash('123123123', 8)
            .then(hash =>  User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role:'master', password: hash }))
                .then(user => {
                    const userId = user._id.toString()
                    const testCampaign1 = {
                        author: user._id.toString(),
                        title: "The Lost Kingdom",
                        background: "A kingdom long forgotten, buried under the sands of time. The ruins hide secrets that could change the world.",
                        objective: "Recover the ancient relic that can bring peace or destruction.",
                        startLocation: new ObjectId(),
                        image: "https://example.com/images/lost_kingdom.png"
                    }

                    return Campaign.create(testCampaign1)
                    .then((campaignToFind) => {
                        return getCampaign(userId ,new ObjectId().toString())
                        .catch(error => errorThrown = error)
                        .finally(() => {
                            expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                            expect(errorThrown.message).to.equal('Campaign not found')
                        })
                    })
                })
    })

    after(() => Promise.all([User.deleteMany(), Campaign.deleteMany]).then(() => mongoose.disconnect()))
})