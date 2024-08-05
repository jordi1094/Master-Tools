import logic from "../logic/index.js";

import handleErrorResponse from "../helper/handleErrorResponse.js";

const createNpcHandler = ( req, res) => {
    const{userId, name, description, image} = req.body

    try{
        logic.createNpc(name, name, description, image )
            .then(() => res.status(201).send())
            .catch(error => {
                handleErrorResponse(error ,res)
            })
    }catch(error) {
        handleErrorResponse(error, res)
    }
}

export default createNpcHandler