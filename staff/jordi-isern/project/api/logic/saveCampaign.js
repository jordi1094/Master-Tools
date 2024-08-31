import { Campaign, User } from "../data/models/index.js";
import { SystemError, NotFoundError, MatchError, ContentError} from "com/errors.js";
import validate from "com/validate.js";
import validateZod from "com/validations/index.js"


const saveCampaign = (campaignId, newCampaignData) => {
    validate.id(campaignId, 'campaignID')

    try{
        validateZod.CampaignSchema.parse(newCampaignData)
    }catch(error) {
        throw new ContentError(`Invalid Campaign data: ${error.errors.map(e=> e.message).join(', ')}`)
    }

    

    return Campaign.findById(campaignId)
        .catch(error => {throw new SystemError(error.message)})
        .then(campaignToEdit => {
            if(!campaignToEdit){
                throw( new NotFoundError('campaign not found'))
            }

            const {title, background, objective, startLocation, image} = newCampaignData
            const campaignData = {
                title,
                background,
                objective,
                startLocation,
                image
            }

            return Campaign.findByIdAndUpdate(campaignToEdit._id.toString(), campaignData,{new: true})
            .catch(error => {throw new SystemError(error.message)})
            .then((campaign) => {return campaign})
        })
}

export default saveCampaign