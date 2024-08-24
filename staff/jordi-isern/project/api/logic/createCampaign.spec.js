import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import {expect} from 'chai'
import{Types} from 'mongoose'
import {Campaign, User} from '../data/models/index.js'
import createCampaign from './createCampaign.js'
import { ContentError, NotFoundError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types

debugger

describe('createCampaign',() => {
    before(() => mongoose.connect(MONGODB_URL_TEST).then(() => Campaign.deleteMany()).then(()=> User.deleteMany()))

    beforeEach(() => Campaign.deleteMany().then(()=> User.deleteMany()))

    it('succes create cmapaign', () =>
        bcrypt.hash('123123123', 8)
            .then(hash => User.create({ name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role:'master', password: hash }))
                .then( user => createCampaign(user.id)
                    .then(() => Campaign.findOne()
                        .then(campaign => {
                            expect(campaign).to.exist
                            expect(campaign.author.toString()).to.equal(user.id.toString())
                        })
                    )
                )
    )

    it('fails on non-exsisting user',() => {
        let errorThrown
        return createCampaign(new ObjectId().toString())
            .catch(error => errorThrown = error)
            .finally(() => {
                expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                expect(errorThrown.message).to.equal('User not found')
            })
    })

    it('fails on invalid userId',() => {
        let errorThrown
        try{
            createCampaign(12333)
        }catch(error){
            errorThrown = error
        }finally{
            expect(errorThrown).to.be.instanceOf(ContentError)
            expect(errorThrown.message).to.equal('userId is not valid')
        }
    })

    after(() => Promise.all([User.deleteMany(), Campaign.deleteMany]).then(() => mongoose.disconnect()))
})