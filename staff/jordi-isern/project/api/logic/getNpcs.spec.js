import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import { expect } from 'chai'
import { Types } from 'mongoose'
import {Npc, User, Location } from '../data/models/index.js'
import getNpcs from './getNpcs.js'
import { ContentError, NotFoundError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types



describe('getNpcs', () => {
    before(() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Npc.deleteMany(), User.deleteMany()]))
    )

    beforeEach(() => Promise.all([User.deleteMany(), Npc.deleteMany()]))

    it('successfully finds all Npcs in the location', () => {
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
            .then(user => {
                const userId = user._id.toString();
                const locationId = new ObjectId().toString()

                const testNpcData1 = {
                    author: userId,
                    image: "orc-warrior.jpg",
                    name: "Gorak the Crusher",
                    description: "A fearsome orc warrior with a massive warhammer and a thirst for battle.",
                    race: "Orc",
                    alignment: "Chaotic Evil",
                    armorClass: 14,
                    hitPoint: {
                        maxHitPoints: 52,
                        currentHitPoints: 52,
                        temporalHitPoints: 0
                    },
                    speed: 30,
                    strength: { score: 18, modifier: 4 },
                    dexterity: { score: 12, modifier: 1 },
                    constitution: { score: 16, modifier: 3 },
                    iniciative: { score: 10, modifier: 0 },
                    wishdom: { score: 8, modifier: -1 },
                    charisma: { score: 6, modifier: -2 },
                    skill: {
                        name: "Athletics",
                        modifier: 6
                    },
                    senses: ["Darkvision 60 ft.", "Passive Perception 9"],
                    lenguages: "Common, Orc",
                    challengeRating: 3,
                    acctions: [
                        {
                            name: "Warhammer Attack",
                            description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (1d12 + 6) bludgeoning damage."
                        },
                        {
                            name: "Aggressive",
                            description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
                        },
                        {
                            name: "Intimidating Presence",
                            description: "The orc can attempt to frighten one enemy it can see within 30 feet."
                        }
                    ],
                    location:[locationId]
                }

                const testNpcData2 = {
                    author: userId,
                    image: "elf-mage.jpg",
                    name: "Elara the Wise",
                    description: "A highly intelligent elven mage who uses her knowledge of ancient spells to protect the forest.",
                    race: "Elf",
                    alignment: "Neutral Good",
                    armorClass: 12,
                    hitPoint: {
                        maxHitPoints: 35,
                        currentHitPoints: 30,
                        temporalHitPoints: 5
                    },
                    speed: 35,
                    strength: { score: 8, modifier: -1 },
                    dexterity: { score: 14, modifier: 2 },
                    constitution: { score: 12, modifier: 1 },
                    iniciative: { score: 12, modifier: 1 },
                    wishdom: { score: 18, modifier: 4 },
                    charisma: { score: 16, modifier: 3 },
                    skill: {
                        name: "Arcana",
                        modifier: 8
                    },
                    senses: ["Darkvision 120 ft.", "Passive Perception 14"],
                    lenguages: "Common, Elvish, Sylvan",
                    challengeRating: 5,
                    acctions: [
                        {
                            name: "Magic Missile",
                            description: "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 3 (1d4+1) force damage."
                        },
                        {
                            name: "Fireball",
                            description: "The mage hurls a fireball that explodes on impact, dealing 8d6 fire damage to all creatures within a 20-ft radius."
                        },
                        {
                            name: "Teleport",
                            description: "The mage teleports to an unoccupied space within 30 feet."
                        }
                    ],
                    location:[locationId]
                }

                return Promise.all([
                    Npc.create(testNpcData1),
                    Npc.create(testNpcData2)
                ]).then(([testNpc1, testNpc2]) => {
                    const npcsId = [testNpc1._id.toString(), testNpc2._id.toString()]
                    return getNpcs(userId, locationId)
                        .then(npcs => {
                            expect(npcs.length).to.equal(2)
                        })
                }) 
            })
    })

    it('fails on non-exsiting user', () => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
            .then(user => {
                const userId = user._id.toString();
                const locationId = new ObjectId().toString()

                const testNpcData1 = {
                    author: userId,
                    image: "orc-warrior.jpg",
                    name: "Gorak the Crusher",
                    description: "A fearsome orc warrior with a massive warhammer and a thirst for battle.",
                    race: "Orc",
                    alignment: "Chaotic Evil",
                    armorClass: 14,
                    hitPoint: {
                        maxHitPoints: 52,
                        currentHitPoints: 52,
                        temporalHitPoints: 0
                    },
                    speed: 30,
                    strength: { score: 18, modifier: 4 },
                    dexterity: { score: 12, modifier: 1 },
                    constitution: { score: 16, modifier: 3 },
                    iniciative: { score: 10, modifier: 0 },
                    wishdom: { score: 8, modifier: -1 },
                    charisma: { score: 6, modifier: -2 },
                    skill: {
                        name: "Athletics",
                        modifier: 6
                    },
                    senses: ["Darkvision 60 ft.", "Passive Perception 9"],
                    lenguages: "Common, Orc",
                    challengeRating: 3,
                    acctions: [
                        {
                            name: "Warhammer Attack",
                            description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (1d12 + 6) bludgeoning damage."
                        },
                        {
                            name: "Aggressive",
                            description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
                        },
                        {
                            name: "Intimidating Presence",
                            description: "The orc can attempt to frighten one enemy it can see within 30 feet."
                        }
                    ],
                    location: [locationId]
                }

                const testNpcData2 = {
                    author: userId,
                    image: "elf-mage.jpg",
                    name: "Elara the Wise",
                    description: "A highly intelligent elven mage who uses her knowledge of ancient spells to protect the forest.",
                    race: "Elf",
                    alignment: "Neutral Good",
                    armorClass: 12,
                    hitPoint: {
                        maxHitPoints: 35,
                        currentHitPoints: 30,
                        temporalHitPoints: 5
                    },
                    speed: 35,
                    strength: { score: 8, modifier: -1 },
                    dexterity: { score: 14, modifier: 2 },
                    constitution: { score: 12, modifier: 1 },
                    iniciative: { score: 12, modifier: 1 },
                    wishdom: { score: 18, modifier: 4 },
                    charisma: { score: 16, modifier: 3 },
                    skill: {
                        name: "Arcana",
                        modifier: 8
                    },
                    senses: ["Darkvision 120 ft.", "Passive Perception 14"],
                    lenguages: "Common, Elvish, Sylvan",
                    challengeRating: 5,
                    acctions: [
                        {
                            name: "Magic Missile",
                            description: "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 3 (1d4+1) force damage."
                        },
                        {
                            name: "Fireball",
                            description: "The mage hurls a fireball that explodes on impact, dealing 8d6 fire damage to all creatures within a 20-ft radius."
                        },
                        {
                            name: "Teleport",
                            description: "The mage teleports to an unoccupied space within 30 feet."
                        }
                    ],
                    location: [locationId]
                }

                return Promise.all([
                    Npc.create(testNpcData1),
                    Npc.create(testNpcData2)
                ]).then(([testNpc1, testNpc2]) => {
                    const npcsId = [testNpc1._id.toString(), testNpc2._id.toString()]

                    return getNpcs(new ObjectId().toString(), locationId)
                        .catch(error => errorThrown = error)
                        .finally(() => {
                            expect(errorThrown).to.be.an.instanceOf(NotFoundError);
                            expect(errorThrown.message).to.equal('User not found');
                        })
                }) 
            })
    })

    it('fails on non-valid user', () => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
            .then(user => {
                const userId = user._id.toString();

                const testNpcData1 = {
                    author: userId,
                    image: "orc-warrior.jpg",
                    name: "Gorak the Crusher",
                    description: "A fearsome orc warrior with a massive warhammer and a thirst for battle.",
                    race: "Orc",
                    alignment: "Chaotic Evil",
                    armorClass: 14,
                    hitPoint: {
                        maxHitPoints: 52,
                        currentHitPoints: 52,
                        temporalHitPoints: 0
                    },
                    speed: 30,
                    strength: { score: 18, modifier: 4 },
                    dexterity: { score: 12, modifier: 1 },
                    constitution: { score: 16, modifier: 3 },
                    iniciative: { score: 10, modifier: 0 },
                    wishdom: { score: 8, modifier: -1 },
                    charisma: { score: 6, modifier: -2 },
                    skill: {
                        name: "Athletics",
                        modifier: 6
                    },
                    senses: ["Darkvision 60 ft.", "Passive Perception 9"],
                    lenguages: "Common, Orc",
                    challengeRating: 3,
                    acctions: [
                        {
                            name: "Warhammer Attack",
                            description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (1d12 + 6) bludgeoning damage."
                        },
                        {
                            name: "Aggressive",
                            description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
                        },
                        {
                            name: "Intimidating Presence",
                            description: "The orc can attempt to frighten one enemy it can see within 30 feet."
                        }
                    ]
                }

                const testNpcData2 = {
                    author: userId,
                    image: "elf-mage.jpg",
                    name: "Elara the Wise",
                    description: "A highly intelligent elven mage who uses her knowledge of ancient spells to protect the forest.",
                    race: "Elf",
                    alignment: "Neutral Good",
                    armorClass: 12,
                    hitPoint: {
                        maxHitPoints: 35,
                        currentHitPoints: 30,
                        temporalHitPoints: 5
                    },
                    speed: 35,
                    strength: { score: 8, modifier: -1 },
                    dexterity: { score: 14, modifier: 2 },
                    constitution: { score: 12, modifier: 1 },
                    iniciative: { score: 12, modifier: 1 },
                    wishdom: { score: 18, modifier: 4 },
                    charisma: { score: 16, modifier: 3 },
                    skill: {
                        name: "Arcana",
                        modifier: 8
                    },
                    senses: ["Darkvision 120 ft.", "Passive Perception 14"],
                    lenguages: "Common, Elvish, Sylvan",
                    challengeRating: 5,
                    acctions: [
                        {
                            name: "Magic Missile",
                            description: "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 3 (1d4+1) force damage."
                        },
                        {
                            name: "Fireball",
                            description: "The mage hurls a fireball that explodes on impact, dealing 8d6 fire damage to all creatures within a 20-ft radius."
                        },
                        {
                            name: "Teleport",
                            description: "The mage teleports to an unoccupied space within 30 feet."
                        }
                    ]
                }

                return Promise.all([
                    Npc.create(testNpcData1),
                    Npc.create(testNpcData2)
                ]).then(([testNpc1, testNpc2]) => {
                    const npcsId = [testNpc1._id.toString(), testNpc2._id.toString()]

                    try {
                        getNpcs(12343, npcsId)
                    }catch(error){
                        errorThrown = error
                    }finally{
                        expect(errorThrown).to.be.an.instanceOf(ContentError)
                        expect(errorThrown.message).to.equal('userId is not valid')
                    }
                }) 
            })
    })
    it('fails on non-valid locationId', () => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
            .then(user => {
                const userId = user._id.toString()

                const testNpcData1 = {
                    author: userId,
                    image: "orc-warrior.jpg",
                    name: "Gorak the Crusher",
                    description: "A fearsome orc warrior with a massive warhammer and a thirst for battle.",
                    race: "Orc",
                    alignment: "Chaotic Evil",
                    armorClass: 14,
                    hitPoint: {
                        maxHitPoints: 52,
                        currentHitPoints: 52,
                        temporalHitPoints: 0
                    },
                    speed: 30,
                    strength: { score: 18, modifier: 4 },
                    dexterity: { score: 12, modifier: 1 },
                    constitution: { score: 16, modifier: 3 },
                    iniciative: { score: 10, modifier: 0 },
                    wishdom: { score: 8, modifier: -1 },
                    charisma: { score: 6, modifier: -2 },
                    skill: {
                        name: "Athletics",
                        modifier: 6
                    },
                    senses: ["Darkvision 60 ft.", "Passive Perception 9"],
                    lenguages: "Common, Orc",
                    challengeRating: 3,
                    acctions: [
                        {
                            name: "Warhammer Attack",
                            description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (1d12 + 6) bludgeoning damage."
                        },
                        {
                            name: "Aggressive",
                            description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
                        },
                        {
                            name: "Intimidating Presence",
                            description: "The orc can attempt to frighten one enemy it can see within 30 feet."
                        }
                    ]
                }

                const testNpcData2 = {
                    author: userId,
                    image: "elf-mage.jpg",
                    name: "Elara the Wise",
                    description: "A highly intelligent elven mage who uses her knowledge of ancient spells to protect the forest.",
                    race: "Elf",
                    alignment: "Neutral Good",
                    armorClass: 12,
                    hitPoint: {
                        maxHitPoints: 35,
                        currentHitPoints: 30,
                        temporalHitPoints: 5
                    },
                    speed: 35,
                    strength: { score: 8, modifier: -1 },
                    dexterity: { score: 14, modifier: 2 },
                    constitution: { score: 12, modifier: 1 },
                    iniciative: { score: 12, modifier: 1 },
                    wishdom: { score: 18, modifier: 4 },
                    charisma: { score: 16, modifier: 3 },
                    skill: {
                        name: "Arcana",
                        modifier: 8
                    },
                    senses: ["Darkvision 120 ft.", "Passive Perception 14"],
                    lenguages: "Common, Elvish, Sylvan",
                    challengeRating: 5,
                    acctions: [
                        {
                            name: "Magic Missile",
                            description: "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 3 (1d4+1) force damage."
                        },
                        {
                            name: "Fireball",
                            description: "The mage hurls a fireball that explodes on impact, dealing 8d6 fire damage to all creatures within a 20-ft radius."
                        },
                        {
                            name: "Teleport",
                            description: "The mage teleports to an unoccupied space within 30 feet."
                        }
                    ]
                }

                return Promise.all([
                    Npc.create(testNpcData1),
                    Npc.create(testNpcData2)
                ]).then(([testNpc1, testNpc2]) => {
                    try{ getNpcs(userId,54365)
                       }catch(error){
                        errorThrown = error
                       }finally{
                            expect(errorThrown).to.be.an.instanceOf(ContentError);
                            expect(errorThrown.message).to.equal('targetLocationId is not valid');
                        }
                }) 
            })
    })

    after(() => Promise.all([User.deleteMany(), Npc.deleteMany()]).then(() => mongoose.disconnect()))
})
