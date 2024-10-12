import 'dotenv/config'
import logic from '../logic/index.js'
import handleErrorResponse from '../helper/handleErrorResponse.js'
const {JWT_SECRETT} = process.env

 const changeTaskStatusHandler = (req, res) => {
    const task = req.body
    const {targetMission} = req.params

    try{
        logic.changeTaskStatus(targetMission, task)
        .then(() => res.status(204).send())
        .catch(error => {
            handleErrorResponse(error, res)
        })
    }catch(error){
        handleErrorResponse(error, res)
    }
 }

 export default changeTaskStatusHandler