import { Character, User, MainSkill, Money, HitPoints, Skills, DeathSaves } from "../data/models/index.js";
import { SystemError, NotFoundError} from "com/errors.js";

import validate from "com/validate.js";

const createCharacter = (userId, characterData) => {
    validate.id(userId, 'userId')


    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if(!user){
                throw (new NotFoundError('user not found'))
            }

         
            const {acrobatics, alignment, animalHandling, arcana, armorClass, athletics, attacksAndSpellcasting, background, bonds, campaignId, charismaDeathSave, charismaModifier, charismaScore, classCharacter, constitutionDeathSave, constitutionModifier, constitutionScore, cooper, currentHitPoints, deathSavesFailures, deathSavesSucceses, deception, dexterityDeathSave, dexterityModifier, dexterityScore, electrum, equipment, exp, featuresAndTraits, flaws, gold, history, hitDice, ideals, iniciative, iniciativeDeathSave, initiativeModifier, initiativeScore, insight, inspiration, intimidation, investigation, level, maxHitPoints, medicine, name, nature, otherProeficiencesAndLanguages, perception, performance, personalityTraits, persuasion, platinium, proficiencyBonus, race, religion, silver, sleightOfHand, speed, stealth, strengthDeathSave, strengthModifier, strengthScore, survival, temporalHitPoints, wisdomModifier, wisdomScore, wishdomDeathSave} = characterData

            
           



            const character = {
                author: userId,
                name,
                race,
                class: classCharacter,
                level,
                expiriencePoints: exp,
                background,
                alignment,
                inspiration,
                proficiencyBonus,
                armorClass,
                iniciative,
                speed,
                strength: new MainSkill({score: strengthScore, modifier: strengthModifier}),
                dexterity: new MainSkill({score: dexterityScore, modifier: dexterityModifier}),
                constitution: new MainSkill({score: constitutionScore, modifier: constitutionModifier}),
                iniciativeSkill: new MainSkill({score: initiativeScore, modifier: initiativeModifier}),
                wishdom: new MainSkill({score: wisdomScore, modifier: wisdomModifier}),
                charisma: new MainSkill({score: charismaScore, modifier: charismaModifier}),
                skills: new Skills({ acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception,performance, persuasion, religion, stealth, sleightOfHand, survival}),
                equipment,
                attacksAndSpellcasting,
                money: new Money({cooper, silver, electrum, gold, platinium}),
                personalityTraits,
                ideals,
                bonds,
                flaws,
                hitPoints: new HitPoints({maxHitPoints, currentHitPoints, temporalHitPoints, dice: hitDice}),
                deathSaves: new DeathSaves({strength: strengthDeathSave, dexterity: dexterityDeathSave, constitution: constitutionDeathSave, iniciative: iniciativeDeathSave, wishdom: wishdomDeathSave, charisma: charismaDeathSave, deathSavesSucceses, deathSavesFailures }),
                featuresAndTraits,
                otherProeficiencesAndLanguages,
                campaing: campaignId
            }
            
            return Character.create(character)
                .catch(error => {throw new SystemError(error.message)})
                .then((character) => {
                    return character
                })
        })
}

export default createCharacter