import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { expect } from 'chai'
import { Types } from 'mongoose'
import { User,Campaign, Location } from '../data/models/index.js'
import saveCampaign from './saveCampaign.js'
import { ContentError, MatchError, NotFoundError } from 'com/errors.js'
import { campaign } from '../data/models/Campaign.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types

debugger

describe('saveCampaing', () => {
    before (() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all(Campaign.deleteMany(), User.deleteMany()))
    )
    beforeEach(() => Promise.all(Campaign.deleteMany(), User.deleteMany()))

    instanceof('should successfully edit the campaing', () => {
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'master', password: hash })
                .then (user => Campaign.create ({author: user._id.toString()}))
            )


    })



})