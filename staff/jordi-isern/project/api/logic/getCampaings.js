import { Campaign, User } from "../data/models/index.js"
import { NotFoundError, SystemError } from "com/errors.js"
import validate from "com/validate.js"

const getCampaigns = (userId) => {
    validate.id(userId,' userId')

    return User.findById(userId).lean()
        .catch(error => {  throw new SystemError (error.message)})
        .then( user => {
            if(!user){
                throw new NotFoundError('User not Found')
            }

<<<<<<< HEAD
            return Campaign.find({_id : {$in:user.campaigns}})
=======
            return Campaign.find({author: user._id.toString()})
>>>>>>> 3bc5f4f253c90c23f22d5578cf9c875e9c35770f
            .catch(error => {throw new SystemError(error.message)})
            .then(campaignsIdList => { 

                return Campaign.find({_id:{$in:campaignsIdList}}).select('-__v').lean()
                .catch(error => {throw new SystemError(error.message)})
                .then(campaigns => {
                    campaigns.forEach(campaign => {
                        campaign.id = campaign._id.toString()
                        
                        delete campaign._id
                    })
                    return campaigns
                })
            })
        })
}

export default getCampaigns
