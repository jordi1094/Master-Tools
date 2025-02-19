import { Location, User } from "../data/models/index.js";
import { NotFoundError,SystemError } from "com/errors.js";
import validate from "com/validate.js";



const getLocations = (userId,locationId ) => {
    validate.id(userId, 'userId')
    validate.id(locationId, 'locationId')

    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if (!user){
                throw new NotFoundError('User not found')
            }
            return Location.find({_id:locationId}).select('nextLocations').lean()
            .then((location)=> {
                const locationsIdList = location[0].nextLocations.map(String)
                return Location.find({_id: {$in:locationsIdList}})
                .then(locations => {
                    locations.forEach(location => {
                        location.id = location._id.toString()
                        
                        delete location._id
                    })
                    return locations
                })                
                .catch(error => {throw new SystemError(error.message)})
            })

        })
}

export default getLocations