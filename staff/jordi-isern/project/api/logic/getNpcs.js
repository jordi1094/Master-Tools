import { Npc, User } from "../data/models/index.js";
import { NotFoundError, SystemError } from "com/errors.js";
import validate from "com/validate.js"


const getNpcs = (userId, targetLocation) => {
    validate.id(userId, 'userId')
    validate.id(targetLocation, 'targetLocationId')

    return User.findById(userId).lean()
    .catch(error => { throw new SystemError(error.message)})
    .then(user => {
        if(!user){
            throw new NotFoundError('User not found')
        }

        return Npc.find({ location:{$in:[targetLocation]}}).select('-__v').lean()
            .catch(error => {{throw new SystemError(error.message)}})
            .then(npcs => {
                npcs.forEach((npc)=> {
                    npc.id = npc._id.toString()

                    delete npc._id
                })
                return npcs
            })
    })
}

export default getNpcs