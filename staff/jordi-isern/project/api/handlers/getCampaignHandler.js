import 'dotenv/config'
import logic from '../logic/index.js'
import handleErrorResponse from '../helper/handleErrorResponse.js'
import jwt from '../util/jasonwebtoken-promised.js'
const{JWT_SECRET} = process.env

const getCampaignHandler = (req,res) => {
    try {
        const token =  req.headers.authorization.slice(7)
        jwt.verify(token, JWT_SECRET)
        .then(payload => {
            const {sub:userId} = payload
            const {targetCampaign} = req.params
            try{
                logic.getCampaign(userId, targetCampaign)
                .then( campaign => {
                    res.status(200)
                    res.json(campaign)
                })
                .catch(error => handleErrorResponse(error , res))
            }catch(error){
                handleErrorResponse(error , res)
            }}
        )
    } catch (error) {
        
    }
        
}

export default getCampaignHandler