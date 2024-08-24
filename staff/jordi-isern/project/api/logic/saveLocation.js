import { Location, User } from "../data/models/index.js";
import { SystemError, NotFoundError, MatchError, ContentError} from "com/errors.js";
import validate from "com/validate.js";
import validateZod from "com/validations/index.js"

const saveLocation = (locationId, locationData) => {
    validate.id(locationId, 'locationId')

    try{
        validateZod.LocationSchema.parse(newLocationData)
    }catch(error){
        throw new ContentError(`Invalid location data: ${error.erros.map(e => e.message).join(', ')}`)
    }

    return locationId.findById(locationId).lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(location => {
            if(!location){
                throw (new NotFoundError('location not found'))
            }

            const {name, description, enemiesIndexList, objectsList, nextLocationsIdList, campaign} = newLocationData
            const locationData = {
                name,
                description,
                enemies: enemiesIndexList,
                objects: objectsList,
                nextLocations: nextLocationsIdList,
                campaign
            }
            return Location.findByIdAndUpdate(locationId, locationData)
            .catch(error => {throw new SystemError(error.message)})
            .then((location) => {return location })
        })
}

export default saveLocation