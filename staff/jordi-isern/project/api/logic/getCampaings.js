import { Campaign, User } from "../data/models/index.js"
import { NotFoundError, SystemError } from "com/errors.js"
import validate from "com/validate.js"
import { campaign } from "../data/models/Campaign.js"

const getCampaigns = (userId) => {
    validate.id(userId,' userId')

    return User.findById(userId).lean()
        .catch(error => {  throw new SystemError (error.message)})
        .then( user => {
            if(!user){
                throw new NotFoundError('User not Found')
            }

            const campaignsIdList = user.campaigns

            return Campaign.find({_id:{$in:campaignsIdList}}).select('-__v').lean()
                .catch(error => {throw new SystemError(error.message)})
                .then(campaigns => {
                    if(campaigns.length !== campaignsIdList.length){
                        throw new NotFoundError('One or more locations not found')
                    }
                    campaigns.forEach(campaign => {
                        campaign.id = campaign._id.toString()

                        delete campaign._id
                    })
                    return campaigns
                })
        })
}

export default getCampaigns
