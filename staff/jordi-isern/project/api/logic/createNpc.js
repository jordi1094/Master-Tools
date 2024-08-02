import { Npc,  User } from "../data/models/index.js";
import { SystemError, NotFoundError} from "com/errors.js";
import validate from "com/validate.js";

const createNpc = (userId, image, name, description) => {
    validate.id(userId, 'userId')
    validate.image(image)
    validate.name(name, 'name')
    validate.text(description, 'description', 500)

    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if(!user){
                throw (new NotFoundError('user not found'))
            }
            const npc = {
                author: userId,
                image: image,
                name: name,
                description: description
            }

            return Npc.create(npc)
                .catch(error => {throw new SystemError(error.message)})
                .then(() => { })
        })
}

export default createNpc