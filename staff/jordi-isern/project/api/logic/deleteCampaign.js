
import validate from "com/validate.js";
import { Campaign} from "../data/models/index.js";
import { SystemError, NotFoundError, ContentError} from "com/errors.js"

const deleteCampaign = (campaignId) => {
    validate.id(campaignId, 'campaignId')

        return Campaign.findByIdAndDelete(campaignId)
        .catch(error => {throw new SystemError(error.message)})
        .then(campaign => {
            if(!campaign){
                throw new NotFoundError('Campaign not found') 
            }
            else {
                return
            }
            
        })
}
export default deleteCampaign