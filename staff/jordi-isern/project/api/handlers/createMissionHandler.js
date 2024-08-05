import logic from "../logic/index.js"

import handleErrorResponse from "../helper/handleErrorResponse.js"

const createMissionHandler = ( req, res) => {
    const{ userId, title, background, objective, startLocation, checkList} = req.body

    try{
        logic.createMission(userId, title, background,objective, startLocation, checkList)
            .then(() => res.status(201).send())
            .catch((error) =>{
                handleErrorResponse(error, res)
            })
    }catch(error){
        handleErrorResponse(error,res)
    }
}

export default createMissionHandler