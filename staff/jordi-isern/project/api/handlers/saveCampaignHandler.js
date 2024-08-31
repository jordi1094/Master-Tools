import'dotenv/config'
import logic from "../logic/index.js";
import jwt from '../util/jasonwebtoken-promised.js'
import handleErrorResponse from "../helper/handleErrorResponse.js";
import { Types } from 'mongoose';
const  {ObjectId} = Types
const {JWT_SECRET} = process.env

const saveCampaignHandler = (req, res) => {
    const {campaignId, newCampaignData} = req.body

    try {
        logic.saveCampaign(campaignId, newCampaignData)
        .then(() => res.status(201).send())
        .catch(error => {
            handleErrorResponse(error, res)
        })
    } catch (error) {
        handleErrorResponse(error, res)
    }
}

export default saveCampaignHandler