import'dotenv/config'
import logic from "../logic/index.js";
import handleErrorResponse from "../helper/handleErrorResponse.js";
const {JWT_SECRET} = process.env

const saveLocationsHandler = (req, res) => {
        const newLocationData = req.body
        const {targetLocation} = req.params

        try{
            logic.saveLocation(targetLocation, newLocationData)
            .then((location) => {
                res.status(200)
                res.json(location)
            })
            .catch(error => {
                handleErrorResponse(error, res)
            })
        }catch(error){
            handleErrorResponse(error, res)
        }
}
export default saveLocationsHandler