import'dotenv/config'
import logic from "../logic/index.js";
import jwt from '../util/jasonwebtoken-promised.js'
import handleErrorResponse from "../helper/handleErrorResponse.js";
const {JWT_SECRET} = process.env

const getMissionsHandler = (req, res) => {
    const token = req.headers.authorization.slice(7)
    jwt.verify(token, JWT_SECRET)
    .then(payload => {
        const {sub:userId} = payload

        const {targetLocation} = req.params

        return logic.getMissions(userId, targetLocation)
            .then(missions => {
                res.status(200)
                res.json(missions)
            })
            .catch(error => handleErrorResponse(error , res))
    })
}

export default getMissionsHandler