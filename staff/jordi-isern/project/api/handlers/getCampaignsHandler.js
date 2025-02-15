import 'dotenv/config'
import logic from '../logic/index.js'
import handleErrorResponse from '../helper/handleErrorResponse.js'

import jwt from '../util/jasonwebtoken-promised.js'

const{JWT_SECRET} = process.env

const getCampaignsHandler = (req, res) => {
    
    try{
        const token = req.headers.authorization.slice(7)
        jwt.verify(token, JWT_SECRET)
            .then(payload => {
                const {sub:userId} = payload

            logic.getCampaigns(userId)
                .then(campaigns => {
                    res.status(200)
                    res.json(campaigns)
                })
            })
            .catch(error => {
                handleErrorResponse(error, res)
            })
        

    }catch(error){
        handleErrorResponse(error, res)
    }
}

export default getCampaignsHandler