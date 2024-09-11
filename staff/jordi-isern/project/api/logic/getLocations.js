import { Location, User } from "../data/models/index.js";
import { NotFoundError,SystemError } from "com/errors.js";
import validate from "com/validate.js";



const getLocations = (userId,locationId ) => {
    validate.id(userId, 'userId')

    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if (!user){
                throw new NotFoundError('User not found')
            }
            Location.find({_id:locationId}).select('nextLocations').lean()
            .then((location)=> {
                const locationsIdList = location[0].nextLocations
                return Location.find({_id: {$in:[locationsIdList]}}).select('name _id').lean()
                .then(locations => {
                    locations.forEach(location => {
                        location.id = location._id.toString()
                        
                        delete location._id
                    })
                    console.log('1')
                    return locations
                })                
                .catch(error => {throw new SystemError(error.message)})
            })

        })
}

export default getLocations