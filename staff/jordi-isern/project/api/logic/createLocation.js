import { Location, User } from "../data/models/index.js";
import { SystemError, NotFoundError} from "com/errors.js";
import validate from "com/validate.js";

const createLocation = (userId, title, description, npcs, enemies, objects, nextLocations, missions) => {
    validate.id(userId, 'userId')
    validate.text(title, 'location title', 30)
    validate.text(description, ' description', 1000 )

    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if(!user){
                throw (new NotFoundError('user not found'))
            }
            const location = {
                author: userId,
                title: title,
                description: description,
                npcs :npcs,
                enemies: enemies,
                objects: objects,
                nextLocations: nextLocations,
                missions: missions
            }
            return Location.create(location)
            .catch(error => {throw new SystemError(error.message)})
            .then(() => { })
        })
}

export default createLocation