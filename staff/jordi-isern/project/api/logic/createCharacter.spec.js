import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { expect } from 'chai'
import { Types } from 'mongoose'
import { Campaign, User, Character } from '../data/models/index.js'
import createCharacter from './createCharacter.js'
import { ContentError, NotFoundError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types

debugger

describe('createCharacter', () => {
    before(() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Character.deleteMany(), User.deleteMany(), Campaign.deleteMany()]))
    )

    beforeEach(() => Promise.all([Character.deleteMany(), User.deleteMany(), Campaign.deleteMany()]))

    it('should successfully create a character', () => {
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({ name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'master', password: hash }))
            .then(user => Campaign.create({author:user.id})
                .then(campaign => {
                    const characterData = {
                        name: 'Test Character',
                        race: 'Human',
                        classCharacter: 'Warrior',
                        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9mKG_XQbYYyW_N-gAW6q5-Zr6e7_ta8x-A&s',
                        level: 1,
                        exp: 0,
                        background: 'Soldier',
                        alignment: 'Neutral Good',
                        inspiration: false,
                        proficiencyBonus: 2,
                        armorClass: 15,
                        iniciative: 10,
                        speed: 30,
                        strengthScore: 16,
                        strengthModifier: 3,
                        dexterityScore: 14,
                        dexterityModifier: 2,
                        constitutionScore: 14,
                        constitutionModifier: 2,
                        initiativeScore: 12,
                        initiativeModifier: 1,
                        wisdomScore: 10,
                        wisdomModifier: 0,
                        charismaScore: 8,
                        charismaModifier: -1,
                        acrobatics: 0,
                        animalHandling: 0,
                        arcana: 0,
                        athletics: 0,
                        deception: 0,
                        history: 0,
                        insight: 0,
                        intimidation: 0,
                        investigation: 0,
                        medicine: 0,
                        nature: 0,
                        perception: 0,
                        performance: 0,
                        persuasion: 0,
                        religion: 0,
                        sleightOfHand: 0,
                        stealth: 0,
                        survival: 0,
                        equipment: 'Basic equipment',
                        attacksAndSpellcasting: 'Sword',
                        cooper: 0,
                        silver: 0,
                        electrum: 0,
                        gold: 10,
                        platinium: 0,
                        personalityTraits: 'Brave and loyal',
                        ideals: 'Honor above all',
                        bonds: 'My sword is my bond',
                        flaws: 'Overconfident',
                        maxHitPoints: 10,
                        currentHitPoints: 10,
                        temporalHitPoints: 0,
                        hitDice: '1d10',
                        deathSavesSucceses: 0,
                        deathSavesFailures: 0,
                        charismaDeathSave: 0,
                        constitutionDeathSave: 0,
                        dexterityDeathSave: 0,
                        iniciativeDeathSave: 0,
                        strengthDeathSave: 0,
                        wishdomDeathSave: 0,
                        otherProeficiencesAndLanguages: 'Common',
                        featuresAndTraits: 'Fighter abilities',
                        campaignId: campaign._id.toString(),
                    }
                    return createCharacter(user.id, characterData)
                        .then(character => {
                            expect(character).to.exist
                            expect(character.name).to.equal(characterData.name)
                        })
                })
            )
    })

    it('Fails on non-exsisting user', () => {
        let errorThrown
        bcrypt.hash('123123123', 8)
            .then(hash => User.create({ name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'master', password: hash }))
            .then(user => Campaign.create({author:user.id})
                .then(campaign => {
                    const characterData = {
                        name: 'Test Character',
                        race: 'Human',
                        classCharacter: 'Warrior',
                        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9mKG_XQbYYyW_N-gAW6q5-Zr6e7_ta8x-A&s',
                        level: 1,
                        exp: 0,
                        background: 'Soldier',
                        alignment: 'Neutral Good',
                        inspiration: false,
                        proficiencyBonus: 2,
                        armorClass: 15,
                        iniciative: 10,
                        speed: 30,
                        strengthScore: 16,
                        strengthModifier: 3,
                        dexterityScore: 14,
                        dexterityModifier: 2,
                        constitutionScore: 14,
                        constitutionModifier: 2,
                        initiativeScore: 12,
                        initiativeModifier: 1,
                        wisdomScore: 10,
                        wisdomModifier: 0,
                        charismaScore: 8,
                        charismaModifier: -1,
                        acrobatics: 0,
                        animalHandling: 0,
                        arcana: 0,
                        athletics: 0,
                        deception: 0,
                        history: 0,
                        insight: 0,
                        intimidation: 0,
                        investigation: 0,
                        medicine: 0,
                        nature: 0,
                        perception: 0,
                        performance: 0,
                        persuasion: 0,
                        religion: 0,
                        sleightOfHand: 0,
                        stealth: 0,
                        survival: 0,
                        equipment: 'Basic equipment',
                        attacksAndSpellcasting: 'Sword',
                        cooper: 0,
                        silver: 0,
                        electrum: 0,
                        gold: 10,
                        platinium: 0,
                        personalityTraits: 'Brave and loyal',
                        ideals: 'Honor above all',
                        bonds: 'My sword is my bond',
                        flaws: 'Overconfident',
                        maxHitPoints: 10,
                        currentHitPoints: 10,
                        temporalHitPoints: 0,
                        hitDice: '1d10',
                        deathSavesSucceses: 0,
                        deathSavesFailures: 0,
                        charismaDeathSave: 0,
                        constitutionDeathSave: 0,
                        dexterityDeathSave: 0,
                        iniciativeDeathSave: 0,
                        strengthDeathSave: 0,
                        wishdomDeathSave: 0,
                        otherProeficiencesAndLanguages: 'Common',
                        featuresAndTraits: 'Fighter abilities',
                        campaignId: campaign._id.toString(),
                    }
                    return createCharacter(new ObjectId.toString(), characterData)
                        .catch(error => errorThrown = error)
                        .finally(() => {
                            expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                            expect(errorThrown.message).to.equal('User not found')
                        })
                    
                })
            )
    })
 
    it('should fail on invalid userId', () => {
        let errorThrown
        bcrypt.hash('123123123', 8)
            .then(hash => User.create({ name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'master', password: hash }))
            .then(user => Campaign.create({author:user.id})
                .then(campaign => {
                    const characterData = {
                        name: 'Test Character',
                        race: 'Human',
                        classCharacter: 'Warrior',
                        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9mKG_XQbYYyW_N-gAW6q5-Zr6e7_ta8x-A&s',
                        level: 1,
                        exp: 0,
                        background: 'Soldier',
                        alignment: 'Neutral Good',
                        inspiration: false,
                        proficiencyBonus: 2,
                        armorClass: 15,
                        iniciative: 10,
                        speed: 30,
                        strengthScore: 16,
                        strengthModifier: 3,
                        dexterityScore: 14,
                        dexterityModifier: 2,
                        constitutionScore: 14,
                        constitutionModifier: 2,
                        initiativeScore: 12,
                        initiativeModifier: 1,
                        wisdomScore: 10,
                        wisdomModifier: 0,
                        charismaScore: 8,
                        charismaModifier: -1,
                        acrobatics: 0,
                        animalHandling: 0,
                        arcana: 0,
                        athletics: 0,
                        deception: 0,
                        history: 0,
                        insight: 0,
                        intimidation: 0,
                        investigation: 0,
                        medicine: 0,
                        nature: 0,
                        perception: 0,
                        performance: 0,
                        persuasion: 0,
                        religion: 0,
                        sleightOfHand: 0,
                        stealth: 0,
                        survival: 0,
                        equipment: 'Basic equipment',
                        attacksAndSpellcasting: 'Sword',
                        cooper: 0,
                        silver: 0,
                        electrum: 0,
                        gold: 10,
                        platinium: 0,
                        personalityTraits: 'Brave and loyal',
                        ideals: 'Honor above all',
                        bonds: 'My sword is my bond',
                        flaws: 'Overconfident',
                        maxHitPoints: 10,
                        currentHitPoints: 10,
                        temporalHitPoints: 0,
                        hitDice: '1d10',
                        deathSavesSucceses: 0,
                        deathSavesFailures: 0,
                        charismaDeathSave: 0,
                        constitutionDeathSave: 0,
                        dexterityDeathSave: 0,
                        iniciativeDeathSave: 0,
                        strengthDeathSave: 0,
                        wishdomDeathSave: 0,
                        otherProeficiencesAndLanguages: 'Common',
                        featuresAndTraits: 'Fighter abilities',
                        campaignId: campaign._id.toString(),
                    }
                    return createCharacter(12343, characterData)
                        .catch(error => errorThrown = error)
                        .finally(() => {
                            expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                            expect(errorThrown.message).to.equal('User not found')
                        })
                    
                })
            )
    })

    it('should fail validation on invalid character data', () => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({ name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'player', password: hash }))
            .then(user => Campaign.create({ author: user._id, name: "Campaign 1" })
                .then(campaign => {
                    const invalidCharacterData = {
                        name: 'Test Character',
                        race: 'Human',
                        classCharacter: 'Warrior',
                        level: 21, 
                        exp: 0,
                        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9mKG_XQbYYyW_N-gAW6q5-Zr6e7_ta8x-A&s',
                        background: 'Soldier',
                        alignment: 'Neutral Good',
                        inspiration: false,
                        proficiencyBonus: 2,
                        armorClass: 15,
                        iniciative: 10,
                        speed: 30,
                        strengthScore: 16,
                        strengthModifier: 3,
                        dexterityScore: 14,
                        dexterityModifier: 2,
                        constitutionScore: 14,
                        constitutionModifier: 2,
                        initiativeScore: 12,
                        initiativeModifier: 1,
                        wisdomScore: 10,
                        wisdomModifier: 0,
                        charismaScore: 8,
                        charismaModifier: -1,
                        acrobatics: 0,
                        animalHandling: 0,
                        arcana: 0,
                        athletics: 0,
                        deception: 0,
                        history: 0,
                        insight: 0,
                        intimidation: 0,
                        investigation: 0,
                        medicine: 0,
                        nature: 0,
                        perception: 0,
                        performance: 0,
                        persuasion: 0,
                        religion: 0,
                        sleightOfHand: 0,
                        stealth: 0,
                        survival: 0,
                        equipment: 'Basic equipment',
                        attacksAndSpellcasting: 'Sword',
                        cooper: 0,
                        silver: 0,
                        electrum: 0,
                        gold: 10,
                        platinium: 0,
                        personalityTraits: 'Brave and loyal',
                        ideals: 'Honor above all',
                        bonds: 'My sword is my bond',
                        flaws: 'Overconfident',
                        maxHitPoints: 10,
                        currentHitPoints: 10,
                        temporalHitPoints: 0,
                        hitDice: '1d10',
                        deathSavesSucceses: 0,
                        deathSavesFailures: 0,
                        charismaDeathSave: 0,
                        constitutionDeathSave: 0,
                        dexterityDeathSave: 0,
                        iniciativeDeathSave: 0,
                        strengthDeathSave: 0,
                        wishdomDeathSave: 0,
                        otherProeficiencesAndLanguages: 'Common',
                        featuresAndTraits: 'Fighter abilities',
                        campaignId: campaign._id.toString(),
                    }
                    try{
                    return createCharacter(user.id.toString(), invalidCharacterData)
                    }catch(error){
                        errorThrown = error
                    }finally{
                            expect(errorThrown).to.be.instanceOf(ContentError)
                    }
                })
            )
    })

    after(() => Promise.all([User.deleteMany(), Campaign.deleteMany(), Character.deleteMany()]).then(() => mongoose.disconnect))
})
