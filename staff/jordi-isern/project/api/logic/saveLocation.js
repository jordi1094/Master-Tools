import {Location } from "../data/models/index.js"
import { SystemError, NotFoundError, ContentError } from "com/errors.js"
import validate from "com/validate.js"
import validateZod from "com/validations/index.js"

const saveLocation = async (locationId, newLocationData) => {
    validate.id(locationId, 'locationId')
    
    try {
        validateZod.LocationSchema.parse(newLocationData)
    } catch (error) {
        throw new ContentError(`Invalid location data: ${error.errors.map(e => e.message).join(', ')}`)
    }

    return Location.findById(locationId)
        .catch(error => {throw new SystemError(error.message)})
        .then(locationToEdit => {
            if(!locationToEdit){
                throw new NotFoundError( 'location not found')
            }
            
            const { name, description, enemies, objects, nextLocationsIdList, campaign:campaignId, nextLocations} = newLocationData
            
            locationToEdit.name = name
            locationToEdit.description = description
            locationToEdit.enemies = enemies
            locationToEdit.nextLocations = nextLocationsIdList
            locationToEdit.objects = objects
            locationToEdit.nextLocations = nextLocations
            

            return locationToEdit.save()
            .then()
            .catch(error => {throw new SystemError(error.message)})
        })
}

export default saveLocation
