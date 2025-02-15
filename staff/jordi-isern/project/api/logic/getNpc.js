import { Npc, User } from "../data/models/index.js";
import { MatchError, NotFoundError, SystemError } from "com/errors.js";
import validate from "com/validate.js"

const getNpc = (userId, npcId) => {
    validate.id(userId, 'userId')
    validate.id(npcId, 'npcId')

    return User.findById(userId).select('_id').lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if(!user){
                throw new NotFoundError('User not found')
            }
            return Npc.findById(npcId).select('-__v -author').lean()
                .catch(error => {throw new SystemError(error.message)})
                .then(npc => {
                    if(!npc){
                        throw new MatchError('Npc not found')
                    }
                    npc.id = npc._id.toString()
                    
                    delete npc._id

                    return npc
                })
        })
}

export default getNpc