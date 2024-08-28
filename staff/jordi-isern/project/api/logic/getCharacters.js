import { Character, User } from "../data/models/index.js";
import { NotFoundError, SystemError } from "com/errors.js";
import validate from "com/validate.js";

const getCharacters = ( userId, charactersIds) => {
    validate.id(userId, 'userId')

    return User.findById(userId).lean()
    .catch(error => {throw new SystemError(error.message)})
    .then(user => {
        if(!user){
            throw new NotFoundError('User not found')
        }

        return Character.find({_id:{ $in: charactersIds}}).select('-__v').lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(characters => {
            if(characters.length !== charactersIds.length){
                throw new NotFoundError('One o more characters not found')
            }
            characters.forEach((character) => {
                character.id = character._id.toString()
                delete character._id
            })
            return characters
        })
    })
}

export default getCharacters