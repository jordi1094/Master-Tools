import'dotenv/config'
import logic from "../logic/index.js";
import jwt from '../util/jasonwebtoken-promised.js'
import handleErrorResponse from "../helper/handleErrorResponse.js";
const {JWT_SECRET} = process.env

const getLocationsHandler = ( req, res) => {
    const token = req.headers.authorization.slice(7)
    jwt.verify(token, JWT_SECRET)
    .then(payload => {
        const {sub:userId} = payload
        
        const locationsId = req.body

        try{
            logic.getLocations(userId, locationsId)
                .then(locations => {
                    res.status(200)
                    res.json(locations)
                })
                .catch(error => handleErrorResponse(error, res))
        }catch(error){
            handleErrorResponse(error , res)
        }
    })
}

export default getLocationsHandler