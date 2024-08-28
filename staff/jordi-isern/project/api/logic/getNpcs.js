import { Npc, User } from "../data/models/index.js";
import { NotFoundError, SystemError } from "com/errors.js";
import validate from "com/validate.js"


const getNpcs = (userId, npcsId) => {
    validate.id(userId, 'userId')

    return User.findById(userId).lean()
    .catch(error => { throw new SystemError(error.message)})
    .then(user => {
        if(!user){
            throw new NotFoundError('User not found')
        }

        return Npc.find({ _id: {$in :npcsId}}).select('-__v').lean()
            .catch(error => {{throw new SystemError(error.message)}})
            .then(npcs => {
                if (npcs.length !== npcsId.length){
                    throw new NotFoundError('One or more locations not found')
                }
                npcs.forEach((npc)=> {
                    npc.id = npc._id.toString()

                    delete npc._id
                })
                return npcs
            })
    })
}

export default getNpcs