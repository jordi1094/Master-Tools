import { Character, User } from "../data/models/index.js";
import { NotFoundError, SystemError } from "com/errors.js";
import validate from "com/validate.js";

const getCharacters = ( userId, targetCampaign) => {
    validate.id(userId, 'userId')
    validate.id(targetCampaign, 'targetCampsaignId')

    return User.findById(userId).lean()
    .catch(error => {throw new SystemError(error.message)})
    .then(user => {
        if(!user){
            throw new NotFoundError('User not found')
        }

        return Character.find({campaing: targetCampaign}).select('-__v').lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(characters => {
            characters.forEach((character) => {
                character.id = character._id.toString()
                delete character._id
            })
            return characters
        })
    })
}

export default getCharacters