import { Campaign, User } from "../data/models/index.js";
import { SystemError, NotFoundError } from "com/errors.js"; 
import validate from "com/validate.js";


const createCampaign = (userId) => {
    validate.id(userId, 'userId')

    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if(!user ){
                throw new NotFoundError('User not found')
            }

            const campaign = {
                author: userId,
            }
            return Campaign.create(campaign)
                .catch(error => {throw new SystemError(error.message)})
                .then ((campaign) => {return campaign })
        })
}

export default createCampaign