import 'dotenv/config'
import logic from '../logic/index.js'
import handleErrorResponse from '../helper/handleErrorResponse.js'

const{JWT_SECRET} = process.env

const getCampaign = (req,res) => {
    try{
        const {targetCampaign} = req.params
        
        logic.getCampaign(targetCampaign)
            .then( campaign => res.jason(campaign))
            .catch(error => handleErrorResponse(error , res))
    }catch(error){
        handleErrorResponse(error , res)
    }    
    
}

export default getCampaign