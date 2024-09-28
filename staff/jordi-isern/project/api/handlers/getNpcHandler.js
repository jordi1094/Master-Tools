import'dotenv/config'
import logic from "../logic/index.js";
import jwt from '../util/jasonwebtoken-promised.js'
import handleErrorResponse from "../helper/handleErrorResponse.js";
const {JWT_SECRET} = process.env


const getNpcHandler = (req, res) => {
    const token = req.headers.authorization.slice(7)
    jwt.verify(token, JWT_SECRET)
    .then(payload => {
        const { sub:userId} = payload

        const {targetNpc} = req.params

        try {
            logic.getNpc(userId, targetNpc)
            .then(npc => {
                res.status(200)
                res.json(npc)
            }).catch(error => handleErrorResponse(error, res))
        } catch (error) {
            handleErrorResponse(error, res)
        }
    })
}

export default getNpcHandler