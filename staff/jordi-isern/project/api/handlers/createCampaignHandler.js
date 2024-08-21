import'dotenv/config'
import logic from "../logic/index.js";
import jwt from '../util/jasonwebtoken-promised.js'
import handleErrorResponse from "../helper/handleErrorResponse.js";
import { Types } from 'mongoose';
const  {ObjectId} = Types
const {JWT_SECRET} = process.env

const createCampaignHandler = (req, res) => {
   
    try{
        const token = req.headers.authorization.slice(7)
        jwt.verify(token, JWT_SECRET)
            .then(payload => {
                const {sub:userId} = payload
                const title = ' '
                const characters= []
                const background= ' '
                const objective= ' '
                
                logic.createCampaign(userId, title, characters, background, objective)
                .then((campaign) => {
                    res.status(201)
                    res.json(campaign)
                })
                .catch(error => {
                    handleErrorResponse(error, res)
                })
            })
    }catch(error){
        handleErrorResponse(error, res)
    }
}

export default createCampaignHandler