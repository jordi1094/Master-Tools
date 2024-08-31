import { Location, User } from "../data/models/index.js";
import { SystemError, NotFoundError } from "com/errors.js";
import validate from "com/validate.js";

const createLocation = (userId) => {
    validate.id(userId, 'userId')

    return User.findById (userId).select('_id').lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if(!user){
                throw new NotFoundError('User not found')
            }

        const location = {
            author: userId
        }

        return Location.create(location)
            .catch(error => { throw new SystemError(error.message)})
            .then((location)=> {return location})
        })
}

export default createLocation