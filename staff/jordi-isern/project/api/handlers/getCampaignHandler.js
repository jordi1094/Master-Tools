import 'dotenv/config'
import logic from '../logic/index.js'
import handleErrorResponse from '../helper/handleErrorResponse.js'

const{JWT_SECRET} = process.env

const getCampaignHandler = (req,res) => {
    try{
        const {targetCampaign} = req.params
        
        logic.getCampaign(targetCampaign)
            .then( campaign => {
                res.status(200)
                res.json(campaign)
            })
            .catch(error => handleErrorResponse(error , res))
    }catch(error){
        handleErrorResponse(error , res)
    }    
    
}

export default getCampaignHandler