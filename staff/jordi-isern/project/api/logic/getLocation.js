import { Location, User } from "../data/models/index.js";
import { NotFoundError,SystemError } from "com/errors.js";
import validate from "com/validate.js";


const getLocation = (userId, locationId) => {
    validate.id(userId, 'userId')
    validate.id(campaignId,'campaignId')

    return User.findById(userId).select('_id').lean()
        .catch(error => {throw new NotFoundError(error.message)})
        .then(user => {
            Location.findById(locationId).select('-__v -author').lean()
                .catch(location => {
                    location.id = location._id.toString()

                    delete location._id

                    return location
                })
        })
}

export default getLocation