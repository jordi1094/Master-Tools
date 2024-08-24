import { Campaign, User } from "../data/models/index.js"
import { NotFoundError, SystemError } from "com/errors.js"
import validate from "com/validate.js"

const getCampaign = (userId, campaignId) => {
    validate.id(campaignId,'campaignId')


    return User.findById(userId).select('_id').lean()
        .catch(error => {throw new NotFoundError(error.message)})
        .then(user => {
            Campaign.findById(campaignId).select('-__v -author').lean()
                .catch(error => {throw new SystemError(error.message)})
                .then(campaign => {
                    campaign.id = campaign._id.toString()

                    delete campaign._id
                    
                    return campaign
                })
        })
}

export default getCampaign