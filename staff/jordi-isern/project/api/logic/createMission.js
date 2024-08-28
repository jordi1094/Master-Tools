import { Mission, User } from "../data/models/index.js";
import { SystemError, NotFoundError} from "com/errors.js";
import validate from "com/validate.js";


const createMission = (userId, missionData) => {
    validate.id(userId, 'userId')

    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error.message)})
        .then(user =>{
            if(!user) {
                throw(new NotFoundError('user not found'))
            }
            const {title, background, objective, startLocation, checkList} = missionData
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