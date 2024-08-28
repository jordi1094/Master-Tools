import { Character, User} from "../data/models/index.js"
import { NotFoundError, SystemError } from "com/errors.js"
import validate from "com/validate.js"


const getCharacter = (userId, characterid) => {
    validate.id(userId, 'userId')
    validate.id(characterid, 'characterId')

    return User.findById(userId).select('_id').lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if(!user){
                throw new NotFoundError('User not found')
            }

            return Character.findById(characterid).select('-__v -author').lean()
                .catch(error => {throw new SystemError(error.message)})
                .then(character => {
                    if(!character){
                        throw new NotFoundError('character not found')
                    }
                    character.id = character._id.toString()

                    delete character._id
                    
                    return character
                })
        })
}

export default getCharacter
