import logic from "../logic/index.js";

import handleErrorResponse from "../helper/handleErrorResponse.js";

const createCampaignHandler = (req, res) => {
    const{userId, title, characters, background, objective, startLocation, image} = req.body

    try{
        logic.createCampaign(userId, title, characters, background, objective, startLocation, image)
            .then(() => res.status(201).send())
            .catch(error => {
                handleErrorResponse(error, res)
            })
    }catch(error){
        handleErrorResponse(error, res)
    }
}

export default createCampaignHandler