import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import { expect } from 'chai'
import { Types } from 'mongoose'
import { Location, User } from '../data/models/index.js'
import getLocations from './getLocations.js'
import { ContentError, NotFoundError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types



describe('getLocations', () => {
    before(() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Location.deleteMany(), User.deleteMany()]))
    );

    beforeEach(() => Promise.all([User.deleteMany(), Location.deleteMany()]));

    it('successfully finds all next locations in the location', () => {
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
                const userId = user._id.toString();
    
                const testLocationData1 = {
                    author: userId,
                    name: "Ancient Ruins",
                    enemies: ["Goblin", "Orc", "Troll"],
                    objects: ["Ancient Sword", "Potion of Healing", "Mysterious Artifact"],
                    description: "An ancient ruin filled with dangerous creatures and hidden treasures.",
                    nextLocations: []
                }
                const testLocationData2 = {
                    author: userId,
                    name: "Ruins",
                    enemies: ["Orc", "Troll"],
                    objects: ["Ancient Sword", "Mysterious Artifact"],
                    description: "An ancient ruin filled with dangerous creatures",
                    nextLocations: []
                }
                return Promise.all([
                    Location.create(testLocationData1),
                    Location.create(testLocationData2)
                ]).then(([testLocation1, testLocation2]) => {
                    const mainLocation = {
                        author: userId,
                        name: "Main Ruins",
                        enemies: ["Orc", "Troll"],
                        objects: ["Ancient Sword", "Mysterious Artifact"],
                        description: "The main ruin with references to other ruins",
                        nextLocations: [testLocation1._id.toString(), testLocation2._id.toString()]
                    }

                    return Location.create(mainLocation)
                        .then((location) => {
                            return getLocations(userId, location._id.toString())
                                .then(locations => {
                                   expect(locations.length).to.equal(2);
                                    const locationIds = locations.map(loc => loc._id.toString());
                                    expect(locationIds).to.include(testLocation1._id.toString());
                                    expect(locationIds).to.include(testLocation2._id.toString());
                                })
                        })
                })
            })
    })
    

    it('fails on non-existing user', () => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
        .then(hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
        .then(user => {
            const userId = user._id.toString();

            const testLocationData1 = {
                author: userId,
                name: "Ancient Ruins",
                enemies: ["Goblin", "Orc", "Troll"],
                objects: ["Ancient Sword", "Potion of Healing", "Mysterious Artifact"],
                description: "An ancient ruin filled with dangerous creatures and hidden treasures.",
                nextLocations: []
            };
            const testLocationData2 = {
                author: userId,
                name: "Ruins",
                enemies: ["Orc", "Troll"],
                objects: ["Ancient Sword", "Mysterious Artifact"],
                description: "An ancient ruin filled with dangerous creatures",
                nextLocations: []
            };



            return Promise.all([
                Location.create(testLocationData1),
                Location.create(testLocationData2)
            ]).then(([testLocation1, testLocation2]) => {
                const mainLocation = {
                    author: userId,
                name: "Ruins",
                enemies: ["Orc", "Troll"],
                objects: ["Ancient Sword", "Mysterious Artifact"],
                description: "An ancient ruin filled with dangerous creatures",
                nextLocations: [testLocation1._id.toString(), testLocation2._id.toString()]
                }
                Location.create(mainLocation)
                .then((location) => {
                    return getLocations(new ObjectId().toString(), location._id.toString())
                        .catch(error => errorThrown = error)
                        .finally(() => {
                            expect(errorThrown).to.be.an.instanceOf(NotFoundError);
                            expect(errorThrown.message).to.equal('User not found');
                        });
                })
                
            })
        })
})
    it('fails on non-valid userId', () => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
        .then(hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
        .then(user => {
            const userId = user._id.toString();

            const testLocationData1 = {
                author: userId,
                name: "Ancient Ruins",
                enemies: ["Goblin", "Orc", "Troll"],
                objects: ["Ancient Sword", "Potion of Healing", "Mysterious Artifact"],
                description: "An ancient ruin filled with dangerous creatures and hidden treasures.",
                nextLocations: []
            };
            const testLocationData2 = {
                author: userId,
                name: "Ruins",
                enemies: ["Orc", "Troll"],
                objects: ["Ancient Sword", "Mysterious Artifact"],
                description: "An ancient ruin filled with dangerous creatures",
                nextLocations: []
            };



            return Promise.all([
                Location.create(testLocationData1),
                Location.create(testLocationData2)
            ]).then(([testLocation1, testLocation2]) => {
                const mainLocation = {
                    author: userId,
                name: "Ruins",
                enemies: ["Orc", "Troll"],
                objects: ["Ancient Sword", "Mysterious Artifact"],
                description: "An ancient ruin filled with dangerous creatures",
                nextLocations: [testLocation1._id.toString(), testLocation2._id.toString()]
                }
                Location.create(mainLocation)
                .then((location) => {
                    try {
                        getLocations(5433, location._id.toString())
                    } catch (error) {
                        errorThrown = error
                    }finally{
                        expect(errorThrown).to.be.an.instanceOf(ContentError);
                        expect(errorThrown.message).to.equal('userId is not valid');
                    }
                })
                
            })
        })
})
    it('fails on non-valid locationId', () => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
        .then(hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
        .then(user => {
            const userId = user._id.toString();

            const testLocationData1 = {
                author: userId,
                name: "Ancient Ruins",
                enemies: ["Goblin", "Orc", "Troll"],
                objects: ["Ancient Sword", "Potion of Healing", "Mysterious Artifact"],
                description: "An ancient ruin filled with dangerous creatures and hidden treasures.",
                nextLocations: []
            };
            const testLocationData2 = {
                author: userId,
                name: "Ruins",
                enemies: ["Orc", "Troll"],
                objects: ["Ancient Sword", "Mysterious Artifact"],
                description: "An ancient ruin filled with dangerous creatures",
                nextLocations: []
            };



            return Promise.all([
                Location.create(testLocationData1),
                Location.create(testLocationData2)
            ]).then(([testLocation1, testLocation2]) => {
                const mainLocation = {
                    author: userId,
                name: "Ruins",
                enemies: ["Orc", "Troll"],
                objects: ["Ancient Sword", "Mysterious Artifact"],
                description: "An ancient ruin filled with dangerous creatures",
                nextLocations: [testLocation1._id.toString(), testLocation2._id.toString()]
                }
                Location.create(mainLocation)
                .then((location) => {
                    try {
                        getLocations(userId, 54325)
                    } catch (error) {
                        errorThrown = error
                    }finally{
                        expect(errorThrown).to.be.an.instanceOf(ContentError);
                        expect(errorThrown.message).to.equal('locationId is not valid');
                    }
                })
                
            })
        })
})

    after(() => Promise.all([User.deleteMany(), Location.deleteMany()]).then(() => mongoose.disconnect()));
});
