import'dotenv/config'
import logic from "../logic/index.js";
import jwt from '../util/jasonwebtoken-promised.js'
import handleErrorResponse from "../helper/handleErrorResponse.js";
import saveLocation from '../logic/saveLocation.js';
const {JWT_SECRET} = process.env

const saveLocationsHandler = (req, res) => {
        const {locationId, newLocationData} = req.body

        try{
            logic.saveLocation(locationId, newLocationData)
            .then(() => res.status(201).send())
            .catch(error => {
                handleErrorResponse(error, res)
            })
        }catch(error){
            handleErrorResponse(error, res)
        }
}
export default saveLocationsHandler