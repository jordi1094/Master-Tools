import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import { expect } from 'chai'
import { Types } from 'mongoose'
import { Character, User } from '../data/models/index.js'
import getCharacter from './getCharacter.js'
import { ContentError, NotFoundError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types


describe('getCharacter', () => {
    before(() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Character.deleteMany(), User.deleteMany()]))
    )

    beforeEach(() => Promise.all([User.deleteMany(), Character.deleteMany()]))

    it('success on finding a Character', () => {
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({ name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
            .catch(error => { console.log(error)})
            .then(user => {
                const userId = user._id.toString()

                const testCharacterData1 = {
                    author: userId,
                    name: "Aragorn",
                    race: "Human",
                    class: "Ranger", 
                    level: 5,
                    expiriencePoints: 6500,
                    background: "Noble",
                    alignment: "Lawful Good",
                    inspiration: true,
                    proficiencyBonus: 3,
                    armorClass: 16,
                    iniciative: 2,
                    speed: 30,
                    strengthScore: 15,
                    strengthModifier: 2,
                    dexterityScore: 14,
                    dexterityModifier: 2,
                    constitutionScore: 13,
                    constitutionModifier: 1,
                    initiativeScore: 2,
                    initiativeModifier: 2,
                    wisdomScore: 10,
                    wisdomModifier: 0,
                    charismaScore: 8,
                    charismaModifier: -1,
                    acrobatics: 2,
                    animalHandling: 3,
                    arcana: 1,
                    athletics: 4,
                    deception: -1,
                    history: 1,
                    insight: 0,
                    intimidation: -1,
                    investigation: 1,
                    medicine: 0,
                    nature: 2,
                    perception: 3,
                    performance: -1,
                    persuasion: -1,
                    religion: 1,
                    stealth: 2,
                    sleightOfHand: 2,
                    survival: 3,
                    equipment: "Leather armor, longsword, longbow, explorer's pack",
                    attacksAndSpellcasting: "Longsword +5 (1d8+2 slashing), Longbow +4 (1d8 piercing)",
                    cooper: 10,
                    silver: 25,
                    electrum: 5,
                    gold: 100,
                    platinium: 5,
                    personalityTraits: "I’m always polite and respectful.",
                    ideals: "Respect. All people, rich or poor, deserve respect.",
                    bonds: "I will face any challenge to win the approval of my family.",
                    flaws: "I secretly believe that everyone is beneath me.",
                    maxHitPoints: 45,
                    currentHitPoints: 35,
                    temporalHitPoints: 0,
                    hitDice: "1d10",
                    strengthDeathSave: 1,
                    dexterityDeathSave: 0,
                    constitutionDeathSave: 1,
                    iniciativeDeathSave: 0,
                    wishdomDeathSave: 0,
                    charismaDeathSave: 0,
                    deathSavesSucceses: 1,
                    deathSavesFailures: 0,
                    featuresAndTraits: "Second Wind, Action Surge",
                    otherProeficiencesAndLanguages: "Common, Elvish, Orcish",
                    campaing: new ObjectId().toString()
                }

                return Character.create(testCharacterData1)
                .then(characterToFind => {
                    return getCharacter(userId, characterToFind._id.toString())
                    .then(character => {
                        expect(character).to.exist
                        expect(character.id.toString()).to.equal(characterToFind._id.toString())
                        expect(character.name).to.equal(characterToFind.name)
                        expect(character.hitDice).to.equal(characterToFind.hitDice)
                        expect(character.campaing.toString()).to.equal(characterToFind.campaing.toString())
                    })
                })
            })
    })

    it('fails on non-existing character', () => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({ name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
            .then(user => {
                const userId = user._id.toString()

                const testCharacterData1 = {
                    author: userId,
                    name: "Aragorn",
                    race: "Human",
                    class: "Ranger", 
                    level: 5,
                    expiriencePoints: 6500,
                    background: "Noble",
                    alignment: "Lawful Good",
                    inspiration: true,
                    proficiencyBonus: 3,
                    armorClass: 16,
                    iniciative: 2,
                    speed: 30,
                    strengthScore: 15,
                    strengthModifier: 2,
                    dexterityScore: 14,
                    dexterityModifier: 2,
                    constitutionScore: 13,
                    constitutionModifier: 1,
                    initiativeScore: 2,
                    initiativeModifier: 2,
                    wisdomScore: 10,
                    wisdomModifier: 0,
                    charismaScore: 8,
                    charismaModifier: -1,
                    acrobatics: 2,
                    animalHandling: 3,
                    arcana: 1,
                    athletics: 4,
                    deception: -1,
                    history: 1,
                    insight: 0,
                    intimidation: -1,
                    investigation: 1,
                    medicine: 0,
                    nature: 2,
                    perception: 3,
                    performance: -1,
                    persuasion: -1,
                    religion: 1,
                    stealth: 2,
                    sleightOfHand: 2,
                    survival: 3,
                    equipment: "Leather armor, longsword, longbow, explorer's pack",
                    attacksAndSpellcasting: "Longsword +5 (1d8+2 slashing), Longbow +4 (1d8 piercing)",
                    cooper: 10,
                    silver: 25,
                    electrum: 5,
                    gold: 100,
                    platinium: 5,
                    personalityTraits: "I’m always polite and respectful.",
                    ideals: "Respect. All people, rich or poor, deserve respect.",
                    bonds: "I will face any challenge to win the approval of my family.",
                    flaws: "I secretly believe that everyone is beneath me.",
                    maxHitPoints: 45,
                    currentHitPoints: 35,
                    temporalHitPoints: 0,
                    hitDice: "1d10",
                    strengthDeathSave: 1,
                    dexterityDeathSave: 0,
                    constitutionDeathSave: 1,
                    iniciativeDeathSave: 0,
                    wishdomDeathSave: 0,
                    charismaDeathSave: 0,
                    deathSavesSucceses: 1,
                    deathSavesFailures: 0,
                    featuresAndTraits: "Second Wind, Action Surge",
                    otherProeficiencesAndLanguages: "Common, Elvish, Orcish",
                    campaing: new ObjectId().toString()
                }

                return Character.create(testCharacterData1)
                .then(characterToFind => {
                    return getCharacter(userId, new ObjectId().toString())
                })
                .catch(error => {errorThrown = error})
                .finally(() =>{
                    expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                    expect(errorThrown.message).to.equal('character not found')
                })
            })
    })
    it('fails on non-existing userId', () => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({ name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
            .then(user => {
                const userId = user._id.toString()

                const testCharacterData1 = {
                    author: userId,
                    name: "Aragorn",
                    race: "Human",
                    class: "Ranger", 
                    level: 5,
                    expiriencePoints: 6500,
                    background: "Noble",
                    alignment: "Lawful Good",
                    inspiration: true,
                    proficiencyBonus: 3,
                    armorClass: 16,
                    iniciative: 2,
                    speed: 30,
                    strengthScore: 15,
                    strengthModifier: 2,
                    dexterityScore: 14,
                    dexterityModifier: 2,
                    constitutionScore: 13,
                    constitutionModifier: 1,
                    initiativeScore: 2,
                    initiativeModifier: 2,
                    wisdomScore: 10,
                    wisdomModifier: 0,
                    charismaScore: 8,
                    charismaModifier: -1,
                    acrobatics: 2,
                    animalHandling: 3,
                    arcana: 1,
                    athletics: 4,
                    deception: -1,
                    history: 1,
                    insight: 0,
                    intimidation: -1,
                    investigation: 1,
                    medicine: 0,
                    nature: 2,
                    perception: 3,
                    performance: -1,
                    persuasion: -1,
                    religion: 1,
                    stealth: 2,
                    sleightOfHand: 2,
                    survival: 3,
                    equipment: "Leather armor, longsword, longbow, explorer's pack",
                    attacksAndSpellcasting: "Longsword +5 (1d8+2 slashing), Longbow +4 (1d8 piercing)",
                    cooper: 10,
                    silver: 25,
                    electrum: 5,
                    gold: 100,
                    platinium: 5,
                    personalityTraits: "I’m always polite and respectful.",
                    ideals: "Respect. All people, rich or poor, deserve respect.",
                    bonds: "I will face any challenge to win the approval of my family.",
                    flaws: "I secretly believe that everyone is beneath me.",
                    maxHitPoints: 45,
                    currentHitPoints: 35,
                    temporalHitPoints: 0,
                    hitDice: "1d10",
                    strengthDeathSave: 1,
                    dexterityDeathSave: 0,
                    constitutionDeathSave: 1,
                    iniciativeDeathSave: 0,
                    wishdomDeathSave: 0,
                    charismaDeathSave: 0,
                    deathSavesSucceses: 1,
                    deathSavesFailures: 0,
                    featuresAndTraits: "Second Wind, Action Surge",
                    otherProeficiencesAndLanguages: "Common, Elvish, Orcish",
                    campaing: new ObjectId().toString()
                }

                return Character.create(testCharacterData1)
            })
            .then(characterToFind => {
                return getCharacter(new ObjectId().toString(), characterToFind._id.toString())
                .catch(error => {errorThrown = error})
                .finally(() =>{
                    expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                    expect(errorThrown.message).to.equal('User not found')
                })
            })
    })

    it('fails on not valid UserId', () => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({ name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
            .then(user => {
                const userId = user._id.toString()

                const testCharacterData1 = {
                    author: userId,
                    name: "Aragorn",
                    race: "Human",
                    class: "Ranger", 
                    level: 5,
                    expiriencePoints: 6500,
                    background: "Noble",
                    alignment: "Lawful Good",
                    inspiration: true,
                    proficiencyBonus: 3,
                    armorClass: 16,
                    iniciative: 2,
                    speed: 30,
                    strengthScore: 15,
                    strengthModifier: 2,
                    dexterityScore: 14,
                    dexterityModifier: 2,
                    constitutionScore: 13,
                    constitutionModifier: 1,
                    initiativeScore: 2,
                    initiativeModifier: 2,
                    wisdomScore: 10,
                    wisdomModifier: 0,
                    charismaScore: 8,
                    charismaModifier: -1,
                    acrobatics: 2,
                    animalHandling: 3,
                    arcana: 1,
                    athletics: 4,
                    deception: -1,
                    history: 1,
                    insight: 0,
                    intimidation: -1,
                    investigation: 1,
                    medicine: 0,
                    nature: 2,
                    perception: 3,
                    performance: -1,
                    persuasion: -1,
                    religion: 1,
                    stealth: 2,
                    sleightOfHand: 2,
                    survival: 3,
                    equipment: "Leather armor, longsword, longbow, explorer's pack",
                    attacksAndSpellcasting: "Longsword +5 (1d8+2 slashing), Longbow +4 (1d8 piercing)",
                    cooper: 10,
                    silver: 25,
                    electrum: 5,
                    gold: 100,
                    platinium: 5,
                    personalityTraits: "I’m always polite and respectful.",
                    ideals: "Respect. All people, rich or poor, deserve respect.",
                    bonds: "I will face any challenge to win the approval of my family.",
                    flaws: "I secretly believe that everyone is beneath me.",
                    maxHitPoints: 45,
                    currentHitPoints: 35,
                    temporalHitPoints: 0,
                    hitDice: "1d10",
                    strengthDeathSave: 1,
                    dexterityDeathSave: 0,
                    constitutionDeathSave: 1,
                    iniciativeDeathSave: 0,
                    wishdomDeathSave: 0,
                    charismaDeathSave: 0,
                    deathSavesSucceses: 1,
                    deathSavesFailures: 0,
                    featuresAndTraits: "Second Wind, Action Surge",
                    otherProeficiencesAndLanguages: "Common, Elvish, Orcish",
                    campaing: new ObjectId().toString()
                }

                return Character.create(testCharacterData1)
            })
            .then(characterToFind => {
                return getCharacter(1234, characterToFind._id.toString())
            })
            .catch(error => {errorThrown = error})
            .finally(() =>{
                expect(errorThrown).to.be.an.instanceOf(ContentError)
                expect(errorThrown.message).to.equal('userId is not valid')
            })
    })

    after(() => Promise.all([User.deleteMany(), Character.deleteMany()]).then(() => mongoose.disconnect()))
})
