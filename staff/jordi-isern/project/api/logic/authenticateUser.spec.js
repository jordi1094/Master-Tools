import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import {expect} from 'chai'

import {User} from '../data/models/index.js'

import authenticateUser from './authenticateUser.js'
import { ContentError, CredentialsError } from 'com/errors.js'

const{ MONGODB_URL_TEST } = process.env


describe('authenticateUser',()=> {
    before(() => mongoose.connect(MONGODB_URL_TEST).then(() => User.deleteMany()))

    beforeEach(() => User.deleteMany())

    it('succeds on exiting user', () =>
    bcrypt.hash('123123123', 8)
        .then(hash => User.create({ name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role:'master', password: hash }))
        .then(()=> authenticateUser('macbook', '123123123'))
        .then(userId => {
            expect(userId).to.be.a.string
            expect(userId).to.have.lengthOf(24)
        })
    )   

    it('fails on non-existing user', ()=>
        authenticateUser('meloinvento', '123123123')
        .catch(error => {
            expect(error).to.be.instanceOf(CredentialsError)
            expect(error.message).to.equal('user not found')
        })
    )

    it('fails on invalid username', () => {
        let errorThrown

        try {
            authenticateUser(123123123, '123123123')
        }catch(error){
            errorThrown = error
        }finally{
            expect(errorThrown).to.be.instanceOf(ContentError)
            expect(errorThrown.message).to.equal('username is not valid')
        }
    })

    it('fails on invalid password', () => {
        let errorThrown

        try{
            authenticateUser('somebody', '1231231')
        }catch(error) {
            errorThrown = error
        }finally{
            expect(errorThrown).to.be.instanceOf(ContentError)
            expect(errorThrown.message).to.equal('password is not valid')
        }
    })

    after (()=> User.deleteMany().then(()=> mongoose.disconnect()))
})