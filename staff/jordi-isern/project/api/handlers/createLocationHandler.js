import logic from "../logic/index.js";

import handleErrorResponse from "../helper/handleErrorResponse.js";

const createLocationHandler = ( req , res) => {
    const {userId, title, description, npcs, enemies, objects, nextLocation, missions} = req.body

    try{
        logic.createLocation(userId, title, description, npcs, enemies, objects, nextLocation, missions)
            .then(()=> res.status(201).send())
            .catch(error => {
                handleErrorResponse(error, res)
            })
    }catch(error){
        handleErrorResponse(error,res)
    }
}

export default createLocationHandler