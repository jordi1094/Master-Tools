import { Campaign, User } from "../data/models/index.js";
import { NotFoundError, SystemError } from "com/errors.js";
import validate from "com/validate.js";

const getCampaign = (userId, campaignId) => {
    validate.id(campaignId, 'campaignId');
    validate.id(userId, 'userId');

    return User.findById(userId).select('_id').lean()
        .then(user => {
            if (!user) {
                throw new NotFoundError('User not found');
            }
            return Campaign.findById(campaignId).select('-__v -author').lean()
            .then(campaign => {
                if (!campaign) {
                    throw new NotFoundError('Campaign not found')
                }
                campaign.id = campaign._id.toString()
                delete campaign._id
                
                return campaign
            })
        })
}

export default getCampaign;
