import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import {expect} from 'chai'
import{Types} from 'mongoose'
import {Location, User} from '../data/models/index.js'
import getLocations from './getLocations.js'
import { ContentError, NotFoundError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types

debugger

describe('getLocations', () => {
    before(() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Location.deleteMany(), User.deleteMany()]))
    )

    beforeEach(()=> Promise.all([User.deleteMany(), Location.deleteMany()]))

    it('success on finding all locations in the array', () => {
        return bcrypt.hash('123123123', 8)
            .then(hash => {
                // Crear usuario
                return User.create({
                    name: 'Mac',
                    surname: 'Book',
                    email: 'mac@book.com',
                    username: 'macbook',
                    role: 'master',
                    password: hash
                });
            })
            .then(user => {
                const userId = user._id.toString();
    
                const testLocationData1 = {
                    author: userId,
                    name: "Ancient Ruins",
                    enemies: ["Goblin", "Orc", "Troll"],
                    objects: ["Ancient Sword", "Potion of Healing", "Mysterious Artifact"],
                    description: "An ancient ruin filled with dangerous creatures and hidden treasures.",
                    nextLocations: [
                        new ObjectId().toString(),
                        new ObjectId().toString()
                    ]
                };
                const testLocationData2 = {
                    author: userId,
                    name: "Ruins",
                    enemies: ["Orc", "Troll"],
                    objects: ["Ancient Sword", "Mysterious Artifact"],
                    description: "An ancient ruin filled with dangerous creatures",
                    nextLocations: [
                        new ObjectId().toString(),
                        new ObjectId().toString()
                    ]
                };
    
                return Promise.all([
                    Location.create(testLocationData1),
                    Location.create(testLocationData2)
                ]).then(([testLocation1, testLocation2]) => {
                    const locationsId = [testLocation1._id.toString(), testLocation2._id.toString()];
    
                    return getLocations(userId, locationsId)
                        .then(locations => {
                            expect(locations.length).to.equal(locationsId.length);
                            locations.map((location, index) => {
                                const expectedLocation = index === 0 ? testLocation1 : testLocation2;
                                expect(location).to.exist;
                                expect(location.id).to.equal(expectedLocation._id.toString());
                                expect(location.name).to.equal(expectedLocation.name);
                                expect(location.enemies).to.deep.equal(expectedLocation.enemies);
                                expect(location.objects).to.deep.equal(expectedLocation.objects);
                                expect(location.description).to.equal(expectedLocation.description);
                                expect(location.nextLocations).to.deep.equal(expectedLocation.nextLocations);
                            });
                        });
                });
            });
    });
    

    it('fail on non-exsisting user', () => {
        let errorThrown

        return bcrypt.hash('123123123', 8)
        .then  (hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role:'master', password: hash }))
            .then(user => {
                const testLocationData1 = {
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
                const testLocationData2 = {
                    author: user._id.toString(),
                    name: "Ruins",
                    enemies: ["Orc", "Troll"],
                    objects: ["Ancient Sword", "Mysterious Artifact"],
                    description: "An ancient ruin filled with dangerous creatures",
                    nextLocations: [
                        new ObjectId().toString(),
                        new ObjectId().toString()
                    ]
                }

                const userId = new ObjectId().toString()
                Location.create(testLocationData1)
                    .then(testLocation1 => {
                        Location.create(testLocationData2)
                            .then(testLocation2 => {
                                const locationsId = [testLocation1._id.toString(), testLocation2._id.toString()]

                                return getLocations(userId, locationsId)
                                   .catch(error => errorThrown = error)
                                   .finally(() => {
                                    expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                                    expect(errorThrown.message).to.equal('location not found')
                                })
                            })
                    })
            })
    })

    after(() => Promise.all([User.deleteMany(), Location.deleteMany]).then(() => mongoose.disconnect()))
})
