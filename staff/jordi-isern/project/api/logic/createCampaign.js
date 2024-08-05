import { Campaign, User } from "../data/models/index.js";
import { SystemError, NotFoundError } from "com/errors.js"; 
import validate from "com/validate.js";


const createCampaign = (userId, title, characters, background, objective, startLocation, image) => {
    validate.id(userId, 'userId')
    validate.text(title, 'title', 50)
    validate.array(characters, 'characters')
    validate.text(background, 'background',1000)
    validate.text(objective, 'objective', 1000)
    validate.id(startLocation, 'Start location')
    validate.image(image)

    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if(!user ){
                throw new NotFoundError('User not found')
            }

            const campaign = {
                author: userId,
                title: title,
                characters: characters,
                background: background,
                objective: objective,
                startLocation: startLocation,
                image: image
            }
            return Campaign.create(campaign)
                .catch(error => {throw new SystemError(error.message)})
                .then (() => { })
        })
}

export default createCampaign