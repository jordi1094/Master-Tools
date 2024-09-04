import { Location } from "../data/models/index.js"
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

    let location
    try {
        location = await Location.findById(locationId)
    } catch (error) {
        throw new SystemError(error.message)
    }

    if (!location) {
        throw new NotFoundError('location not found')
    }

    const { name, description, enemiesIndexList, object, nextLocationsIdList, campaign } = newLocationData

    location.name = name
    location.description = description
    location.enemies = enemiesIndexList
    location.nextLocations = nextLocationsIdList
    location.object = object
    location.campaign = campaign

    try {
        return await location.save()
    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default saveLocation
