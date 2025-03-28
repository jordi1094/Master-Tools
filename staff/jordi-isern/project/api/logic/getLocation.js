import { Location, User } from "../data/models/index.js";
import { NotFoundError,SystemError } from "com/errors.js";
import validate from "com/validate.js";


const getLocation = (userId, locationId) => {
    validate.id(userId, 'userId')
    validate.id(locationId,'locationId')

    return User.findById(userId).select('_id').lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if(!user){
                throw new NotFoundError('User not Found')
            }
            return Location.findById(locationId).select('-__v -author').lean()
                .catch(error => { throw new SystemError(error.message)})
                .then(location => {
                    if(!location){
                        throw new NotFoundError('Location not found')
                    }
                    location.id = location._id.toString()

                    delete location._id

                    return location
                })
        })
}

export default getLocation