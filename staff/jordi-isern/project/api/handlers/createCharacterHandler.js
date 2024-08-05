import logic from "../logic/index.js";

import handleErrorResponse from "../helper/handleErrorResponse.js";

const createCharacterHandler = (req, res) => {
    const{userId, name, image} = req.body

    try{
        logic.createCharacter(userId, name, image)
            .then(() => req.status(201).send())
            .catch(error => {
                handleErrorResponse(error,res)
            })
    }catch{
        handleErrorResponse(error, res)
    }
}

export default createCharacterHandler