import'dotenv/config'
import logic from "../logic/index.js"
import handleErrorResponse from "../helper/handleErrorResponse.js"

const deleteCampaignHandler = (req,res) => {
    const {targetCampaign} = req.params

    try {
        logic.deleteCampaign(targetCampaign)
        .then(() => res.status(204).send())
        .catch(error => {
            handleErrorResponse(error, res)
        })
    } catch (error) {
        handleErrorResponse(error, res)
    }
}
export default deleteCampaignHandler