import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import { expect, use } from 'chai'
import { Types } from 'mongoose'
import { Character, User } from '../data/models/index.js'
import getCharacters from './getCharacters.js'
import { ContentError, NotFoundError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types


describe('getCharacters', () => {
    before(() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Character.deleteMany(), User.deleteMany()]))
    )

    beforeEach(() => Promise.all([Character.deleteMany(), User.deleteMany()]))

    it('succesfully finds all Charactters in the array', () => {
        return bcrypt.hash('123123123', 8)
        .then(hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
        .then(user => {
            const userId = user._id.toString()
            const campaingId = new ObjectId().toString()

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
                campaing: campaingId
            }

            const testCharacterData2 = {
                author: userId,
                name: "Lyra Stormwind",
                race: "Elf",
                class: "Wizard",
                level: 7,
                expiriencePoints: 23000,
                background: "Sage",
                alignment: "Chaotic Neutral",
                inspiration: false,
                proficiencyBonus: 3,
                armorClass: 12,
                iniciative: 3,
                speed: 30,
                strengthScore: 8,
                strengthModifier: -1,
                dexterityScore: 16,
                dexterityModifier: 3,
                constitutionScore: 14,
                constitutionModifier: 2,
                initiativeScore: 3,
                initiativeModifier: 3,
                wisdomScore: 12,
                wisdomModifier: 1,
                charismaScore: 10,
                charismaModifier: 0,
                acrobatics: 3,
                animalHandling: 1,
                arcana: 6,
                athletics: -1,
                deception: 0,
                history: 6,
                insight: 1,
                intimidation: 0,
                investigation: 6,
                medicine: 1,
                nature: 4,
                perception: 1,
                performance: 0,
                persuasion: 0,
                religion: 4,
                stealth: 3,
                sleightOfHand: 3,
                survival: 1,
                equipment: "Spellbook, wand, robe, dagger",
                attacksAndSpellcasting: "Firebolt +6 (1d10 fire), Magic Missile (3 bolts 1d4+1 each)",
                cooper: 50,
                silver: 100,
                electrum: 20,
                gold: 250,
                platinium: 10,
                personalityTraits: "I’m convinced that people are always trying to steal my secrets.",
                ideals: "Knowledge. The path to power and self-improvement is through knowledge.",
                bonds: "My life's work is a series of tomes related to a specific field of lore.",
                flaws: "I am easily distracted by the promise of information.",
                maxHitPoints: 38,
                currentHitPoints: 25,
                temporalHitPoints: 5,
                hitDice: "1d6",
                strengthDeathSave: 0,
                dexterityDeathSave: 1,
                constitutionDeathSave: 1,
                iniciativeDeathSave: 0,
                wishdomDeathSave: 1,
                charismaDeathSave: 0,
                deathSavesSucceses: 2,
                deathSavesFailures: 1,
                featuresAndTraits: "Arcane Recovery, Spell Mastery",
                otherProeficiencesAndLanguages: "Common, Elvish, Draconic",
                campaing: campaingId
            }

            return Promise.all([
                Character.create(testCharacterData1),
                Character.create(testCharacterData2)
            ]).then(([testCharacter1, testCharacter2]) => {
               
                return getCharacters(userId, campaingId)
                    .then(characters => {
                        expect(characters.length).to.equal(2)
                    })
            })
        })
    })

    it('fails on non-existing user', () => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
        .then(hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
        .then(user => {
            const userId = user._id.toString()
            const campaingId = new ObjectId().toString()

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
                campaing: campaingId
            }

            const testCharacterData2 = {
                author: userId,
                name: "Lyra Stormwind",
                race: "Elf",
                class: "Wizard",
                level: 7,
                expiriencePoints: 23000,
                background: "Sage",
                alignment: "Chaotic Neutral",
                inspiration: false,
                proficiencyBonus: 3,
                armorClass: 12,
                iniciative: 3,
                speed: 30,
                strengthScore: 8,
                strengthModifier: -1,
                dexterityScore: 16,
                dexterityModifier: 3,
                constitutionScore: 14,
                constitutionModifier: 2,
                initiativeScore: 3,
                initiativeModifier: 3,
                wisdomScore: 12,
                wisdomModifier: 1,
                charismaScore: 10,
                charismaModifier: 0,
                acrobatics: 3,
                animalHandling: 1,
                arcana: 6,
                athletics: -1,
                deception: 0,
                history: 6,
                insight: 1,
                intimidation: 0,
                investigation: 6,
                medicine: 1,
                nature: 4,
                perception: 1,
                performance: 0,
                persuasion: 0,
                religion: 4,
                stealth: 3,
                sleightOfHand: 3,
                survival: 1,
                equipment: "Spellbook, wand, robe, dagger",
                attacksAndSpellcasting: "Firebolt +6 (1d10 fire), Magic Missile (3 bolts 1d4+1 each)",
                cooper: 50,
                silver: 100,
                electrum: 20,
                gold: 250,
                platinium: 10,
                personalityTraits: "I’m convinced that people are always trying to steal my secrets.",
                ideals: "Knowledge. The path to power and self-improvement is through knowledge.",
                bonds: "My life's work is a series of tomes related to a specific field of lore.",
                flaws: "I am easily distracted by the promise of information.",
                maxHitPoints: 38,
                currentHitPoints: 25,
                temporalHitPoints: 5,
                hitDice: "1d6",
                strengthDeathSave: 0,
                dexterityDeathSave: 1,
                constitutionDeathSave: 1,
                iniciativeDeathSave: 0,
                wishdomDeathSave: 1,
                charismaDeathSave: 0,
                deathSavesSucceses: 2,
                deathSavesFailures: 1,
                featuresAndTraits: "Arcane Recovery, Spell Mastery",
                otherProeficiencesAndLanguages: "Common, Elvish, Draconic",
                campaing: campaingId
            }

            return Promise.all([
                Character.create(testCharacterData1),
                Character.create(testCharacterData2)
            ]).then(() => {
                return getCharacters(new ObjectId().toString(), campaingId)
                .catch(error => errorThrown = error)
                .finally(() => {
                    expect(errorThrown).to.be.an.instanceOf(NotFoundError);
                    expect(errorThrown.message).to.equal('User not found');
                });
            })
        })
    })

    after(() => Promise.all([Character.deleteMany(), User.deleteMany()]) .then(()=> mongoose.disconnect()))
})