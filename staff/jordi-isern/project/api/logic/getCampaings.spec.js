import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import { expect } from 'chai'
import { Types } from 'mongoose'
import {Campaign, User } from '../data/models/index.js'
import getCampaigns from './getCampaings.js'
import { ContentError, NotFoundError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types

debugger
describe('getCampaings', () => {
    before(() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Campaign.deleteMany(), User.deleteMany()]))
    )

    beforeEach(() => Promise.all([Campaign.deleteMany(), User.deleteMany()]))

    it('successfully finds all the Campaings from a user', () => {
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({
                name: 'Mac',
                surname: 'Book',
                email: 'mac@book.com',
                username: 'macbook',
                role: 'master',
                password: hash
            }))
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
    
                const testCampaign2 = {
                    author: userId,
                    title: "Rise of the Dark Lord",
                    background: "An evil lord has risen from the depths, gathering an army of the undead. The world teeters on the brink of darkness.",
                    objective: "Defeat the Dark Lord before he conquers the world.",
                    startLocation: new ObjectId(),
                    image: "https://example.com/images/dark_lord.png"
                }
    
                return Promise.all([
                    Campaign.create(testCampaign1),
                    Campaign.create(testCampaign2)
                ]).then(([createdCampaign1, createdCampaign2]) => {
                    const newCampaigns = [createdCampaign1._id.toString(), createdCampaign2._id.toString()]
    
                    return User.findByIdAndUpdate(userId, {
                        $push: { campaigns: { $each: newCampaigns } }
                    }, { new: true })
                    .then(() => getCampaigns(userId))
                    .then(campaigns => {
                        expect(campaigns.length).to.equal(2)
                        campaigns.forEach((campaign, index) => {
                            const expectedCampaign = index === 0 ? createdCampaign1 : createdCampaign2
                            expect(campaign).to.exist
                            expect(campaign.id).to.equal(expectedCampaign._id.toString())
                            expect(campaign.title).to.equal(expectedCampaign.title)
                            expect(campaign.background).to.equal(expectedCampaign.background)
                            expect(campaign.objective).to.equal(expectedCampaign.objective)
                            expect(campaign.startLocation.toString()).to.equal(expectedCampaign.startLocation.toString())
                            expect(campaign.image).to.equal(expectedCampaign.image)
                        })
                    })
                })
            })
    })

    it('fails on non-existing user', () => {
        let errorThrown
            return bcrypt.hash('123123123', 8)
            .then(hash => User.create({
                name: 'Mac',
                surname: 'Book',
                email: 'mac@book.com',
                username: 'macbook',
                role: 'master',
                password: hash
            }))
            .then(user => {
                const userId = new ObjectId().toString()
    
                const testCampaign1 = {
                    author: userId,
                    title: "The Lost Kingdom",
                    background: "A kingdom long forgotten, buried under the sands of time. The ruins hide secrets that could change the world.",
                    objective: "Recover the ancient relic that can bring peace or destruction.",
                    startLocation: new ObjectId(),
                    image: "https://example.com/images/lost_kingdom.png"
                }
    
                const testCampaign2 = {
                    author: userId,
                    title: "Rise of the Dark Lord",
                    background: "An evil lord has risen from the depths, gathering an army of the undead. The world teeters on the brink of darkness.",
                    objective: "Defeat the Dark Lord before he conquers the world.",
                    startLocation: new ObjectId(),
                    image: "https://example.com/images/dark_lord.png"
                }
    
                return Promise.all([
                    Campaign.create(testCampaign1),
                    Campaign.create(testCampaign2)
                ]).then(([createdCampaign1, createdCampaign2]) => {
                    const newCampaigns = [createdCampaign1._id.toString(), createdCampaign2._id.toString()]
    
                    return User.findByIdAndUpdate(userId, {
                        $push: { campaigns: { $each: newCampaigns } }
                    }, { new: true })
                    .then(() => getCampaigns(userId))
                        .catch(error => {errorThrown = error})
                        .finally(() => {
                            expect(errorThrown).to.be.an.instanceOf(NotFoundError);
                            expect(errorThrown.message).to.equal('User not Found');
                        })
                })
            })
    })

    it('fails on non-existing one campaign in the array', () => {
        let errorThrown
            return bcrypt.hash('123123123', 8)
            .then(hash => User.create({
                name: 'Mac',
                surname: 'Book',
                email: 'mac@book.com',
                username: 'macbook',
                role: 'master',
                password: hash
            }))
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
    
                const testCampaign2 = {
                    author: userId,
                    title: "Rise of the Dark Lord",
                    background: "An evil lord has risen from the depths, gathering an army of the undead. The world teeters on the brink of darkness.",
                    objective: "Defeat the Dark Lord before he conquers the world.",
                    startLocation: new ObjectId(),
                    image: "https://example.com/images/dark_lord.png"
                }
    
                return Promise.all([
                    Campaign.create(testCampaign1),
                    Campaign.create(testCampaign2)
                ]).then(([createdCampaign1, createdCampaign2]) => {
                    const newCampaigns = [createdCampaign1._id.toString(), new ObjectId().toString()]
    
                    return User.findByIdAndUpdate(userId, {
                        $push: { campaigns: { $each: newCampaigns } }
                    }, { new: true })
                    .then(() => getCampaigns(userId))
                        .catch(error => errorThrown = error)
                        .finally(() => {
                            expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                            expect(errorThrown.message).to.equal('One or more locations not found')
                        })
                })
            })
    })
    

    after(() => Promise.all([User.deleteMany(), Campaign.deleteMany()]).then(() => mongoose.disconnect()))

})