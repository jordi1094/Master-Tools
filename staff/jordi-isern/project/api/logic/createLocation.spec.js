import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import {expect} from 'chai'
import{Types} from 'mongoose'
import { User, Location} from '../data/models/index.js';
import createLocation from './createLocation.js'
import { ContentError, NotFoundError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types

debugger

describe('createLocation', () => {
    before (() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Location.deleteMany(), User.deleteMany()]))
    )

    beforeEach(() => Promise.all([Location.deleteMany(), User.deleteMany()]))

    it('success create location', () => {
        bcrypt.hash ('123123123', 8)
            .then(hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role:'master', password: hash}))
                .then((user) => createLocation(user.Id) )
                    .then((location) => {
                        expect(location).to.exist
                        expect(location.author.toString()).to.be.equal(user.id.toString())
                    })
    })

    it('fails on non-existing user', () => {
        let errorThrown
        return createLocation(new ObjectId().toString())
            .catch(error => errorThrown = error)
            .finally(() => {
                expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                expect(errorThrown.message).to.equal('User not found')
            })
    })

    it('fails on invalid userId',() => {
        let errorThrown
        try{
            createLocation(12333)
        }catch(error){
            errorThrown = error
        }finally{
            expect(errorThrown).to.be.instanceOf(ContentError)
            expect(errorThrown.message).to.equal('userId is not valid')
        }
    })

    after(() => Promise.all([User.deleteMany(), Location.deleteMany]).then(() => mongoose.disconnect()))
})