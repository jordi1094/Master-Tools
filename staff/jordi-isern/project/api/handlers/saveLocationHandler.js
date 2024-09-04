import'dotenv/config'
import logic from "../logic/index.js";
import jwt from '../util/jasonwebtoken-promised.js'
import handleErrorResponse from "../helper/handleErrorResponse.js";
import saveLocation from '../logic/saveLocation.js';
const {JWT_SECRET} = process.env

const saveLocationsHandler = (req, res) => {
        const newLocationData = req.body
        const {targetLocation} = req.params

        try{
            logic.saveLocation(targetLocation, newLocationData)
            .then(() => res.status(204).send())
            .catch(error => {
                handleErrorResponse(error, res)
            })
        }catch(error){
            handleErrorResponse(error, res)
        }
}
export default saveLocationsHandler