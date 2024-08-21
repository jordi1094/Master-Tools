import { Campaign } from "../data/models/index.js"
import { NotFoundError, SystemError } from "com/errors.js"
import validate from "com/validate.js"

const getCampaign = campaignId => {
    validate.id(campaignId,'campaignId')


    return Campaign.findById(campaignId).select('-__v -author').lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(campaign => {
            return campaign
        })
}

export default getCampaign