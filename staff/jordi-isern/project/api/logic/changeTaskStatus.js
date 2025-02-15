import {Mission} from '../data/models/index.js'
import { SystemError, NotFoundError, MatchError, ContentError} from "com/errors.js";
import validate from "com/validate.js";
import validateZod from "com/validations/index.js"

const changeTaskStatus = (missionsId, taskModified) => {
    validate.id(missionsId, 'missionId')

    try {
        validateZod.TaskSchema.parse(taskModified)
    } catch (error) {
        throw new ContentError(`Invalid task data: ${error.errors.map(e=> e.message).join(', ')}`)
    }

    return Mission.findById(missionsId)
        .catch(error => {throw new SystemError(error.message)})
        .then(missionToEdit => {
            if(!missionToEdit){
                throw new NotFoundError('missions not found')
            }

            const {task=taskName, status} = taskModified

            const taskIndex = missionToEdit.checkList.findIndex(t => t.task === task)

            if(taskIndex === -1){throw new NotFoundError('task not found')}

            missionToEdit.checkList[taskIndex] = {
                ...missionToEdit.checkList[taskIndex]._doc, status
            }

            
            return missionToEdit.save()
            
        })
}

export default changeTaskStatus
