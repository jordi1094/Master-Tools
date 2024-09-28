import error, {SystemError} from 'com/errors'
import validateZod from 'com/validations'

const createMission = (missionData) => {
    try {
        validateZod.MissionSchema.parse(missionData)

        return fetch(`${import.meta.env.VITE_API_URL}/missions`,{
            method: 'POST',
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(missionData)
        })
        .catch(() => {throw new SystemError('server error')})
        .then(response => {
            if(response.status === 201){
                return
            }
            return response.json()
                .catch(() => {throw new SystemError('server error')})
                .then(body => {
                    const {error , message} = body

                    const constructor = error [error]

                    throw new constructor(message)
                })
        })
    } catch (error) {
        console.error(error.errors)
        return
    }
}

export default createMission