import { Mission, User } from "../data/models/index.js";
import { SystemError, NotFoundError, ContentError} from "com/errors.js";
import validate from "com/validate.js";
import validateZod from "com/validations/index.js";


const createMission = (userId, missionData) => {
    validate.id(userId, 'userId')

    try{
        validateZod.MissionSchema.parse(missionData)
    }catch(error){
        throw new ContentError(`Invalid mision data: ${error.erros.map(e => e.message).join(', ')}`)
    }

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
                .then((mission) => { return mission})
        })
}

export default createMission