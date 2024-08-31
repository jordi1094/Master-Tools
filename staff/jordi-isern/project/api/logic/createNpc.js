import { Npc, User, MainSkill, HitPoints } from "../data/models/index.js";
import { SystemError, NotFoundError, ContentError} from "com/errors.js";

import validate from "com/validate.js";
import NpcSchema from "com/validations/NpcSchema.js";
import mongoose from "mongoose";

const createNpc = (userId, npcData) => {
    validate.id(userId, 'userId')

    try{
        NpcSchema.parse(npcData)
    }catch(error){
        throw new ContentError(`Invalid npc data: ${error.errors.map(e => e.message).join(', ')}`)
    }

    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if(!user){
                throw (new NotFoundError('user not found'))
            }

            const { actionDescription1, actionDescription2, actionDescription3, actionName1, actionName2, actionName3, alignment, armorClass, challengeRating, charismaModifier, charismaScore, constitutionModifier, constitutionScore, currentHitPoints, description, dexterityModifier, dexterityScore, image, initiativeModifier, initiativeScore, lenguages, maxHitPoints, name, race, senses,skillName, skillModifier, speed, strengthModifier, strengthScore, temporalHitPoints, wisdomModifier, wisdomScore } = npcData

            const npc = {
                author: userId,
                name,
                image,
                race,
                alignment,
                armorClass,
                speed,
                description,
                challengeRating,
                strength: new MainSkill({score: strengthScore, modifier: strengthModifier}),
                dexterity: new MainSkill({score: dexterityScore, modifier: dexterityModifier}),
                constitution: new MainSkill({score: constitutionScore, modifier: constitutionModifier}),
                iniciativeSkill: new MainSkill({score: initiativeScore, modifier: initiativeModifier}),
                wishdom: new MainSkill({score: wisdomScore, modifier: wisdomModifier}),
                charisma: new MainSkill({score: charismaScore, modifier: charismaModifier}),
                hitPoints: new HitPoints({maxHitPoints, currentHitPoints, temporalHitPoints}),
                senses: senses,
                skill:{name: skillName, modifier: skillModifier},
                lenguages: lenguages,
                actions: [{name: actionName1, description:actionDescription1},{name: actionName2, description: actionDescription2},{name:actionName3, description:actionDescription3}]
            }
            
            return Npc.create(npc)
                .catch(error => {throw new SystemError(error.message)})
                .then((npc) => {
                    return npc
                })
        })
}

export default createNpc