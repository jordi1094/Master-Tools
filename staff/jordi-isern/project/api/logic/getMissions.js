import { Mission, User } from "../data/models/index.js";
import { NotFoundError,SystemError } from "com/errors.js";
import validate from "com/validate.js";

const getMissions = (userId, locationId) => {
    validate.id(userId, 'userId')
    validate.id(locationId, 'locationId')

    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error.message)})
        .then( user => {
            if(!user){
                throw new NotFoundError('User not found')
            }
            return Mission.find({startLocation: locationId}).lean()
            .then(missions => {
                missions.forEach(mission => {
                    mission.id = mission._id.toString()

                    delete mission._id
                })
                return missions
            })
            .catch(error => {throw new SystemError(error.message)})
        })
}

export default getMissions