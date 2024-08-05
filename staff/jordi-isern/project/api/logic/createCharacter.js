import { Character, User } from "../data/models/index.js";
import { SystemError, NotFoundError} from "com/errors.js";
import validate from "com/validate.js";

const createCharacter = (userId, name, image) => {
    validate.id(userId, 'userId')
    validate.image(image)
    validate.name(name, 'name')

    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if(!user){
                throw (new NotFoundError('user not found'))
            }
            const Character = {
                author: userId,
                image: image,
                name: name
            }

            return Character.create(Character)
                .catch(error => {throw new SystemError(error.message)})
                .then(() => { })
        })
}

export default createCharacter