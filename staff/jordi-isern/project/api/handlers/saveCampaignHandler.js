import'dotenv/config'
import logic from "../logic/index.js"
import handleErrorResponse from "../helper/handleErrorResponse.js"

const saveCampaignHandler = (req, res) => {
    const newCampaignData = req.body
    const {targetCampaign} = req.params

    try {
        logic.saveCampaign(targetCampaign, newCampaignData)
        .then(() => res.status(204).send())
        .catch(error => {
            handleErrorResponse(error, res)
        })
    } catch (error) {
        handleErrorResponse(error, res)
    }
}

export default saveCampaignHandler