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

            const {title, background, objective, image, startLocation} = newCampaignData
            
            campaignToEdit.title= title
            campaignToEdit.background= background
            campaignToEdit.objective = objective
            campaignToEdit.image = image
            campaignToEdit.startLocation = startLocation



            return campaignToEdit.save()
            .then()
            .catch(error => {throw new SystemError(error.message)})
        })
}

export default saveCampaign