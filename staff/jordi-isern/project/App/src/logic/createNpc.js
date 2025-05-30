import errors,{SystemError} from 'com/errors'
import validateZod from 'com/validations'

const createNpc = (npcData) => {
    
    try{
        validateZod.NpcSchema.parse(npcData)

    
        return fetch(`${import.meta.env.VITE_API_URL}/npcs`,{
            method: 'POST',
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(npcData)
        })
        .catch(() => {throw new SytemError('server error')})
        .then(response => {
            if (response.status === 201){
                return response.json()
                 .catch((error) => {console.log(error)})
                 .then(character => character)
            }
            return response.json()
                .catch(() => {throw new SystemError('server error')})
                .then(body => {
                    const {error, message } = body

                    const constructor = error[error]

                    throw new constructor(message)
                })
        })
    }catch(error){
        console.error(error.errors)
        return
    }
}

export default createNpc

