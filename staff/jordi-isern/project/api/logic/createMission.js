import { Mission, User } from "../data/models/index.js";
import { SystemError, NotFoundError} from "com/errors.js";
import validate from "com/validate.js";


const createMission = (userId, title, background, objective, startLocation, checkList) => {
    validate.id(userId, 'userId')
    validate.text(title,'mission title', 30)
    validate.text(background,'mission background', 500)
    validate.text(objective, 'mission objective', 500)
    validate.id(startLocation, 'Start location id')
    validate.array(checkList, 'checkList')

    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user =>{
            if(!user) {
                throw(new NotFoundError('user not found'))
            }

            const mission ={
                author: userId,
                title: title,
                background: background,
                objective: objective,
                startLocation: startLocation,
                checkList: checkList
            }
            
            return Mission.create(mission)
                .catch(error =>{ throw new SystemError(error.message)})
                .then(() => { })
        })
}

export default createMission