import 'dotenv/config'
import logic from "../logic/index.js";

import jwt from '../util/jasonwebtoken-promised.js'

import handleErrorResponse from "../helper/handleErrorResponse.js";

const{JWT_SECRET} = process.env

const createMissionHandler = ( req, res) => {
    try{
        const token= req.headers.authorization.slice(7)
        jwt.verify(token, JWT_SECRET)
        .then(payload => {
            const {sub: userId} = payload
            
            const data = req.body

            try{
                logic.createMission(userId, data)
                    .then(() => {
                        res.status(201)
                        res.json()
                    })
                    .catch(error => handleErrorResponse(error, res))
            }catch(error){
                handleErrorResponse(error, res)
            }

        })
    }catch(error){
        handleErrorResponse(error,res)
    }
}

export default createMissionHandler