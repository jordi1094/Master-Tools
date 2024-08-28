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

    it('succes on find Location', () => {
        return bcrypt.hash('123123123', 8)
            .then  (hash => User.create({
                name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role:'master', password: hash 
            }))
                .then(user => {
                    const userId = user._id.toString()
                    
                    const testLocationData = {
                        author: userId,
                        name: "Ancient Ruins",
                        enemies: ["Goblin", "Orc", "Troll"],
                        objects: ["Ancient Sword", "Potion of Healing", "Mysterious Artifact"],
                        description: "An ancient ruin filled with dangerous creatures and hidden treasures.",
                        nextLocations: [
                            new ObjectId().toString(),
                            new ObjectId().toString()
                        ]
                    }
                    return Location.create(testLocationData)
                    .then((locationToFind) => {
                        return getLocation(userId ,locationToFind._id.toString())
                            .then(location => {
                                expect(location).to.exist
                                expect(location.id.toString()).to.equal(locationToFind._id.toString())
                                expect(location.name).to.equal(testLocationData.name)
                                expect(location.enemies).to.deep.equal(testLocationData.enemies)
                                expect(location.description).to.equal(testLocationData.description)
                                expect(location.nextLocations.map(id => id.toString())).to.deep.equal(testLocationData.nextLocations);
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
                    return Location.create(testLocationData)
                        .then((locationToFind) => {
                            return getLocation(locationToFind._id)
                                .catch(error => errorThrown = error)
                                .finally(() => {
                                    expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                                    expect(errorThrown.message).to.equal('User not found')
                                })
                        })
                })
    })

    it('fails on non-correct userId',() => {
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
                    return Location.create(new ObjectId().toString(),testLocationData)
                        .then((locationToFind) => {
                            return getLocation(locationToFind._id)
                                .catch(error => errorThrown = error)
                                .finally(() => {
                                    expect(errorThrown).to.be.an.instanceOf(ContentError)
                                    expect(errorThrown.message).to.equal('UserId not correct')
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
                    return Location.create(testLocationData)
                        .then((locationToFind) => {
                            return getLocation(new ObjectId().toString())
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

