import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { expect } from 'chai'
import { Types } from 'mongoose'
import { Npc, User } from '../data/models/index.js'
import getNpc from './getNpc.js'
import { ContentError, MatchError, NotFoundError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types

debugger

describe('getNpc', () => {
    before(() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Npc.deleteMany(), User.deleteMany()]))
    )

    beforeEach(() => Promise.all([User.deleteMany(), Npc.deleteMany()]))

    it('success on find Npc', () => {
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({
                name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash
            }))
            .then(user => {
                const userId = user._id.toString()

                const testNpcData1 = {
                    author: userId,
                    name: "Gorak the Crusher",
                    image: "orc-warrior.jpg",
                    race: "Orc",
                    alignment: "Chaotic Evil",
                    armorClass: 14,
                    speed: 30,
                    description: "A fearsome orc warrior with a massive warhammer and a thirst for battle.",
                    challengeRating: 3,
                    strength: { score: 18, modifier: 4 },
                    dexterity: { score: 12, modifier: 1 },
                    constitution: { score: 16, modifier: 3 },
                    iniciativeSkill: { score: 10, modifier: 0 },
                    wisdom: { score: 8, modifier: -1 },
                    charisma: { score: 6, modifier: -2 },
                    hitPoints: { maxHitPoints: 52, currentHitPoints: 52, temporalHitPoints: 0 },
                    senses: "Darkvision 60 ft., Passive Perception 9",
                    skill: { name: "Athletics", modifier: 6 },
                    lenguages: "Common, Orc",
                    actions: [
                        { name: "Warhammer Attack", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (1d12 + 6) bludgeoning damage." },
                        { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see." },
                        { name: "Intimidating Presence", description: "The orc can attempt to frighten one enemy it can see within 30 feet." }
                    ]
                }

                return Npc.create(testNpcData1)
                    .then(npcToFind => {
                        return getNpc(userId, npcToFind._id.toString())
                        .then(npc => {
                            expect(npc).to.exist
                            expect(npc.id.toString()).to.equal(npcToFind._id.toString())
                            expect(npc.name).to.equal(npcToFind.name)
                            expect(npc.alignment).to.equal(npcToFind.alignment)
                        })
                    })
            })
    })

    it('fails on non-existing user', () => {
        let errorThrown

        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({
                name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash
            }))
            .then(user => {
                const userId = user._id.toString()

                const testNpcData1 = {
                    author: userId,
                    name: "Gorak the Crusher",
                    image: "orc-warrior.jpg",
                    race: "Orc",
                    alignment: "Chaotic Evil",
                    armorClass: 14,
                    speed: 30,
                    description: "A fearsome orc warrior with a massive warhammer and a thirst for battle.",
                    challengeRating: 3,
                    strength: { score: 18, modifier: 4 },
                    dexterity: { score: 12, modifier: 1 },
                    constitution: { score: 16, modifier: 3 },
                    iniciativeSkill: { score: 10, modifier: 0 },
                    wisdom: { score: 8, modifier: -1 },
                    charisma: { score: 6, modifier: -2 },
                    hitPoints: { maxHitPoints: 52, currentHitPoints: 52, temporalHitPoints: 0 },
                    senses: "Darkvision 60 ft., Passive Perception 9",
                    skill: { name: "Athletics", modifier: 6 },
                    lenguages: "Common, Orc",
                    actions: [
                        { name: "Warhammer Attack", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (1d12 + 6) bludgeoning damage." },
                        { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see." },
                        { name: "Intimidating Presence", description: "The orc can attempt to frighten one enemy it can see within 30 feet." }
                    ]
                }

                return Npc.create(testNpcData1)
                    .then(npcToFind => getNpc(new ObjectId().toString(), npcToFind._id.toString()))
                    .catch(error => {
                        errorThrown = error
                    })
                    .finally(() => {
                        expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                        expect(errorThrown.message).to.equal('User not found')
                    })
            })
    })
    it('fails on non-correct user', () => {
        let errorThrown

        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({
                name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash
            }))
            .then(user => {
                const userId = user._id.toString()

                const testNpcData1 = {
                    author: userId,
                    name: "Gorak the Crusher",
                    image: "orc-warrior.jpg",
                    race: "Orc",
                    alignment: "Chaotic Evil",
                    armorClass: 14,
                    speed: 30,
                    description: "A fearsome orc warrior with a massive warhammer and a thirst for battle.",
                    challengeRating: 3,
                    strength: { score: 18, modifier: 4 },
                    dexterity: { score: 12, modifier: 1 },
                    constitution: { score: 16, modifier: 3 },
                    iniciativeSkill: { score: 10, modifier: 0 },
                    wisdom: { score: 8, modifier: -1 },
                    charisma: { score: 6, modifier: -2 },
                    hitPoints: { maxHitPoints: 52, currentHitPoints: 52, temporalHitPoints: 0 },
                    senses: "Darkvision 60 ft., Passive Perception 9",
                    skill: { name: "Athletics", modifier: 6 },
                    lenguages: "Common, Orc",
                    actions: [
                        { name: "Warhammer Attack", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (1d12 + 6) bludgeoning damage." },
                        { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see." },
                        { name: "Intimidating Presence", description: "The orc can attempt to frighten one enemy it can see within 30 feet." }
                    ]
                }

                return Npc.create(testNpcData1)
                    .then(npcToFind => getNpc(123443, npcToFind._id.toString()))
                    .catch(error => {
                        errorThrown = error
                    })
                    .finally(() => {
                        expect(errorThrown).to.be.an.instanceOf(ContentError)
                        expect(errorThrown.message).to.equal('userId is not valid')
                    })
            })
    })
    it('fails on non-exsisting Npc', () => {
        let errorThrown

        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({
                name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash
            }))
            .then(user => {
                const userId = user._id.toString()

                const testNpcData1 = {
                    author: userId,
                    name: "Gorak the Crusher",
                    image: "orc-warrior.jpg",
                    race: "Orc",
                    alignment: "Chaotic Evil",
                    armorClass: 14,
                    speed: 30,
                    description: "A fearsome orc warrior with a massive warhammer and a thirst for battle.",
                    challengeRating: 3,
                    strength: { score: 18, modifier: 4 },
                    dexterity: { score: 12, modifier: 1 },
                    constitution: { score: 16, modifier: 3 },
                    iniciativeSkill: { score: 10, modifier: 0 },
                    wisdom: { score: 8, modifier: -1 },
                    charisma: { score: 6, modifier: -2 },
                    hitPoints: { maxHitPoints: 52, currentHitPoints: 52, temporalHitPoints: 0 },
                    senses: "Darkvision 60 ft., Passive Perception 9",
                    skill: { name: "Athletics", modifier: 6 },
                    lenguages: "Common, Orc",
                    actions: [
                        { name: "Warhammer Attack", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (1d12 + 6) bludgeoning damage." },
                        { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see." },
                        { name: "Intimidating Presence", description: "The orc can attempt to frighten one enemy it can see within 30 feet." }
                    ]
                }

                return Npc.create(testNpcData1)
                    .then(npcToFind => getNpc(user._id.toString(), new ObjectId().toString()))
                    .catch(error => {
                        errorThrown = error
                    })
                    .finally(() => {
                        expect(errorThrown).to.be.an.instanceOf(MatchError)
                        expect(errorThrown.message).to.equal('Npc not found')
                    })
            })
    })

    after(() => Promise.all([User.deleteMany(), Npc.deleteMany()]).then(() => mongoose.disconnect()))

})

