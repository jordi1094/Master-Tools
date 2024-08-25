import { Location, User } from "../data/models/index.js";
import { NotFoundError,SystemError } from "com/errors.js";
import validate from "com/validate.js";


const getLocations = (userId, locationsId) => {
    validate.id(userId, 'userId')

    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if (!user){
                throw new NotFoundError('User not found')
            }

            return Location.find({ _id:{ $in :locationsId}}).select('-__v').lean()
                .catch(error => { throw new SystemError(error.message)})
                .then(locations => {
                    locations.forEach((location) => {
                        location.id = location._id.toString()
                        delete location._id
                    })
                    return locations
                })
        })
}

export default getLocations