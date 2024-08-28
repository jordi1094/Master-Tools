import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { expect } from 'chai'
import { Types } from 'mongoose'
import { Location, User, Npc} from '../data/models/index.js'
import createNpc from './createNpc.js'
import { ContentError, NotFoundError } from 'com/errors.js'
import { campaign } from '../data/models/Campaign.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types

debugger

describe('createNpc', () => {
    before(()=> mongoose.connect(MONGODB_URL_TEST)
    .then(() => Promise.all([Npc.deleteMany(), User.deleteMany(), Location.deleteMany()])) 
    )

    beforeEach(() => Promise.all([ Npc.deleteMany(),User.deleteMany(), Location.deleteMany()]))
    
    it('should successfully create a Npc', () => {
        return bcrypt.hash('1223123123', 8)
            .then(hash => User.create({ name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'master', password: hash }))
                .then(user => Location.create({ author: "64efbbbf0474b54a2c9d8d24", name: "Misty Forest", description: "A dense, fog-covered forest filled with eerie silence." })
                .then(location => {
                        const userId = user._id.toString()

                        const testNpcData = {
                            actionDescription1: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) slashing damage.",
                            actionDescription2: "The creature roars, frightening nearby enemies.",
                            actionDescription3: "Heals itself or an ally for 1d8 hit points.",
                            actionName1: "Sword Slash",
                            actionName2: "Terrifying Roar",
                            actionName3: "Healing Touch",
                            alignment: "Chaotic Good",
                            armorClass: 16,
                            challengeRating: 4,
                            charismaModifier: 2,
                            charismaScore: 3,
                            constitutionModifier: 3,
                            constitutionScore: 16,
                            currentHitPoints: 40,
                            description: "A valiant warrior with a mysterious past and a strong sense of justice.",
                            dexterityModifier: 2,
                            dexterityScore: 15,
                            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
                            initiativeModifier: 2,
                            initiativeScore: 12,
                            lenguages: "Common, Elvish",
                            maxHitPoints: 40,
                            name: "Aldor the Brave",
                            race: "Human",
                            senses: "Darkvision 60 ft., Passive Perception 13",
                            skillName: "Athletics",
                            skillModifier: 5,
                            speed: 30,
                            strengthModifier: 4,
                            strengthScore: 18,
                            temporalHitPoints: 5,
                            wisdomModifier: 1,
                            wisdomScore: 12
                        }
                        

                        return createNpc(userId, testNpcData)
                            .then(npc => {
                                expect(npc).to.exist
                                expect(npc.name).to.equal(testNpcData.name)
                            })


                    })    
            )
    })
    
    it('fail on non-exsisting user', () => {
        let errorThrown
        return bcrypt.hash('1223123123', 8)
            .then(hash => User.create({ name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'master', password: hash }))
                .then(user => Location.create({ author: "64efbbbf0474b54a2c9d8d24", name: "Misty Forest", description: "A dense, fog-covered forest filled with eerie silence." })
                .then(location => {
                        const userId = user._id.toString()

                        const testNpcData = {
                            actionDescription1: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) slashing damage.",
                            actionDescription2: "The creature roars, frightening nearby enemies.",
                            actionDescription3: "Heals itself or an ally for 1d8 hit points.",
                            actionName1: "Sword Slash",
                            actionName2: "Terrifying Roar",
                            actionName3: "Healing Touch",
                            alignment: "Chaotic Good",
                            image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
                            armorClass: 16,
                            challengeRating: 4,
                            charismaModifier: 2,
                            charismaScore: 14,
                            constitutionModifier: 3,
                            constitutionScore: 16,
                            currentHitPoints: 40,
                            description: "A valiant warrior with a mysterious past and a strong sense of justice.",
                            dexterityModifier: 2,
                            dexterityScore: 15,
                            initiativeModifier: 2,
                            initiativeScore: 12,
                            lenguages: "Common, Elvish",
                            maxHitPoints: 40,
                            name: "Aldor the Brave",
                            race: "Human",
                            senses: "Darkvision 60 ft., Passive Perception 13",
                            skillName: "Athletics",
                            skillModifier: 5,
                            speed: 30,
                            strengthModifier: 4,
                            strengthScore: 18,
                            temporalHitPoints: 5,
                            wisdomModifier: 1,
                            wisdomScore: 12
                        }
                        

                        return createNpc(new ObjectId().toString(), testNpcData)
                        .catch(error => errorThrown = error)
                        .finally(() => {
                            expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                            expect(errorThrown.message).to.equal('user not found')
                        })

                    })    
            )
    })
    
    it('fail on non valid UserId', () => {
        let errorThrown
        return bcrypt.hash('1223123123', 8)
            .then(hash => User.create({ name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'master', password: hash }))
                .then(user => Location.create({ author: "64efbbbf0474b54a2c9d8d24", name: "Misty Forest", description: "A dense, fog-covered forest filled with eerie silence." })
                .then(location => {
                        const userId = user._id.toString()

                        const testNpcData = {
                            actionDescription1: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) slashing damage.",
                            actionDescription2: "The creature roars, frightening nearby enemies.",
                            actionDescription3: "Heals itself or an ally for 1d8 hit points.",
                            actionName1: "Sword Slash",
                            actionName2: "Terrifying Roar",
                            actionName3: "Healing Touch",
                            alignment: "Chaotic Good",
                            armorClass: 16,
                            image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
                            challengeRating: 4,
                            charismaModifier: 2,
                            charismaScore: 14,
                            constitutionModifier: 3,
                            constitutionScore: 16,
                            currentHitPoints: 40,
                            description: "A valiant warrior with a mysterious past and a strong sense of justice.",
                            dexterityModifier: 2,
                            dexterityScore: 15,
                            initiativeModifier: 2,
                            initiativeScore: 12,
                            lenguages: "Common, Elvish",
                            maxHitPoints: 40,
                            name: "Aldor the Brave",
                            race: "Human",
                            senses: "Darkvision 60 ft., Passive Perception 13",
                            skillName: "Athletics",
                            skillModifier: 5,
                            speed: 30,
                            strengthModifier: 4,
                            strengthScore: 18,
                            temporalHitPoints: 5,
                            wisdomModifier: 1,
                            wisdomScore: 12
                        }
                        
                        try{
                            return createNpc(12343, testNpcData)
                        }catch(error){ 
                            errorThrown = error
                        }finally{
                            expect(errorThrown).to.be.an.instanceOf(ContentError)
                            expect(errorThrown.message).to.equal('userId is not valid')
                        }

                    })    
            )
    })
    
    it('fail validation on invalid Npc data', () => {
        let errorThrown
        return bcrypt.hash('1223123123', 8)
            .then(hash => User.create({ name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'master', password: hash }))
                .then(user => Location.create({ author: "64efbbbf0474b54a2c9d8d24", name: "Misty Forest", description: "A dense, fog-covered forest filled with eerie silence." })
                .then(location => {
                        const userId = user._id.toString()

                        const testNpcData = {
                            actionDescription1: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) slashing damage.",
                            actionDescription2: "The creature roars, frightening nearby enemies.",
                            actionDescription3: "Heals itself or an ally for 1d8 hit points.",
                            actionName1: "Sword Slash",
                            actionName2: "Terrifying Roar",
                            actionName3: "Healing Touch",
                            alignment: 4,
                            image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
                            armorClass: 16,
                            challengeRating: 4,
                            charismaModifier: 2,
                            charismaScore: 14,
                            constitutionModifier: 3,
                            constitutionScore: 16,
                            currentHitPoints: '7',
                            description: "A valiant warrior with a mysterious past and a strong sense of justice.",
                            dexterityModifier: 2,
                            dexterityScore: 15,
                            initiativeModifier: 2,
                            initiativeScore: 12,
                            lenguages: "Common, Elvish",
                            maxHitPoints: 40,
                            name: "Aldor the Brave",
                            race: "Human",
                            senses: "Darkvision 60 ft., Passive Perception 13",
                            skillName: "Athletics",
                            skillModifier: 5,
                            speed: 30,
                            strengthModifier: 4,
                            strengthScore: 18,
                            temporalHitPoints: 5,
                            wisdomModifier: 1,
                            wisdomScore: 12
                        }
                        
                        try{
                            return createNpc(userId, testNpcData)
                        }catch(error){ 
                            errorThrown = error
                        }finally{
                            expect(errorThrown).to.be.instanceOf(ContentError)
                        }

                    })    
            )
    })



    after(() => Promise.all([User.deleteMany(), Location.deleteMany(), Npc.deleteMany()]))
})
