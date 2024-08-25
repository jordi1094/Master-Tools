import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import {expect} from 'chai'
import{Types} from 'mongoose'
import {Location, User} from '../data/models/index.js'
import getLocation from './getLocation.js'
import { ContentError, NotFoundError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types

debugger

describe('getLocation', () => {
    before(() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Location.deleteMany(), User.deleteMany()]))
    )

    beforeEach(()=> Promise.all([User.deleteMany(), Location.deleteMany()]))

    it('succes on find Location',() => {
        bcrypt.hash('123123123', 8)
            .then  (hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role:'master', password: hash }))
                .then(user => {
                    testLocationData= {
                        author: user._id.toString(),
                        name: "Ancient Ruins",
                        enemies: ["Goblin", "Orc", "Troll"],
                        objects: ["Ancient Sword", "Potion of Healing", "Mysterious Artifact"],
                        description: "An ancient ruin filled with dangerous creatures and hidden treasures.",
                        nextLocations: [
                            new ObjectId().toString(),
                            new ObjectId().toString()
                        ]
                    }
                    Location.create(testLocationData)
                    .then((locationToFind) => {
                        getLocation(locationToFind._id).toString()
                            .catch(error =>{ console.log(error)
                                return
                            })
                            .then(location => {
                                expect(location).to.exist
                                expect(location._id.toString()).to.equal(locationToFind._id.toString())
                                expect(location.author).to.equal(testLocationData.author)
                                expect(location.name).to.equal('hola')
                                expect(location.enemies).to.equal(testLocationData.enemies)
                                expect(location.objects).to.equal(testLocationData.objects)
                                expect(location.description).to.equal(testLocationData.description)
                                expect(location.nextLocations).to.equal(testLocationData.nextLocations)
                            })
                        })
                })
    })
    it('fails on non-exsisting user',() => {
        let errorThrown
        bcrypt.hash('123123123', 8)
            .then  (hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role:'master', password: hash }))
                .then(user => {
                    testLocationData= {
                        author: new ObjectId().toString(),
                        name: "Ancient Ruins",
                        enemies: ["Goblin", "Orc", "Troll"],
                        objects: ["Ancient Sword", "Potion of Healing", "Mysterious Artifact"],
                        description: "An ancient ruin filled with dangerous creatures and hidden treasures.",
                        nextLocations: [
                            new ObjectId().toString(),
                            new ObjectId().toString()
                        ]
                    }
                    Location.create(testLocationData)
                        .then((locationToFind) => {
                            getLocation(locationToFind._id)
                                .catch(error => errorThrown = error)
                                .finally(() => {
                                    expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                                    expect(errorThrown.message).to.equal('User not found')
                                })
                        })
                })
    })
    it('fails on non-exsisting Location',() => {
        let errorThrown
        bcrypt.hash('123123123', 8)
            .then  (hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role:'master', password: hash }))
                .then(user => {
                    testLocationData= {
                        author: user._id.toString(),
                        name: "Ancient Ruins",
                        enemies: ["Goblin", "Orc", "Troll"],
                        objects: ["Ancient Sword", "Potion of Healing", "Mysterious Artifact"],
                        description: "An ancient ruin filled with dangerous creatures and hidden treasures.",
                        nextLocations: [
                            new ObjectId().toString(),
                            new ObjectId().toString()
                        ]
                    }
                    Location.create(testLocationData)
                        .then((locationToFind) => {
                            getLocation(new ObjectId().toString())
                                .catch(error => errorThrown = error)
                                .finally(() => {
                                    expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                                    expect(errorThrown.message).to.equal('User not found')
                                })
                        })
                })
    })

    after(() => Promise.all([User.deleteMany(), Location.deleteMany]).then(() => mongoose.disconnect()))
})