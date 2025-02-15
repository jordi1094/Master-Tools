import'dotenv/config'
import logic from "../logic/index.js";
import jwt from '../util/jasonwebtoken-promised.js'
import handleErrorResponse from "../helper/handleErrorResponse.js";
import { get } from 'mongoose';
const {JWT_SECRET} = process.env

const getCharacterHandler = (req, res) => {
    const token =  req.headers.authorization.slice(7)
    jwt.verify(token, JWT_SECRET)
    .then(payload => {
        const {sub:userId} = payload

        const {targetCharacter} = req.params

        try{
            logic.getCharacter(userId, targetCharacter)
            .then(character => {
                res.status(200)
                res.json(character)
            }).catch(error => handleErrorResponse(error, res))
        }catch(error){
            handleErrorResponse(error, res)
        }
    })
}
export default getCharacterHandler