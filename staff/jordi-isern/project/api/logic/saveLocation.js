import { Campaign, Location } from "../data/models/index.js"
import { SystemError, NotFoundError, ContentError } from "com/errors.js"
import validate from "com/validate.js"
import validateZod from "com/validations/index.js"
import { campaign } from "../data/models/Campaign.js"

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

    if(newLocationData.campaign){
    let campaign
    try{
        campaign = await Campaign.findById(newLocationData.campaign)
        
        campaign.startLocation = locationId

        const campaignSaved = await campaign.save()
    }catch(error){
        throw new SystemError(error.message)
    }}

    if (!location) {
        throw new NotFoundError('location not found')
    }

    if(!campaign){
        throw new NotFoundError('campaign not found')
    }

    const { name, description, enemies, object, nextLocationsIdList, campaign:campaignId} = newLocationData

    location.name = name
    location.description = description
    location.enemies = enemies
    location.nextLocations = nextLocationsIdList
    location.object = object


    try {
        const locationSaved = await location.save()

        locationSaved.id = locationSaved._id.toString()
        delete locationSaved._id
        return locationSaved
    } catch (error) {
        throw new SystemError(error.message)
    }
}

export default saveLocation
