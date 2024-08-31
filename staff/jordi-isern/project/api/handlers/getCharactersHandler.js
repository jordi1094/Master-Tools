import'dotenv/config'
import logic from "../logic/index.js";
import jwt from '../util/jasonwebtoken-promised.js'
import handleErrorResponse from "../helper/handleErrorResponse.js";
import { Types } from 'mongoose';
const {JWT_SECRET} = process.env


const getCharacters = (req, res) => {
    const token = req.headers.authorization.slice(7)
    jwt.verify(token, JWT_SECRET)
    .then(payload => {
        const {sub:userId} = payload

        const charactersId = req.body
        try{
            logic.getCharacters(userId, charactersIds)
                .then(characters => {
                    res.status(200)
                    res.json(characters)
                }).catch(error => handleErrorResponse(error, res))
        }catch(error){
            handleErrorResponse(error, res)
        }
    })
}

export default getCharacters