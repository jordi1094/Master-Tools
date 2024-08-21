import errors,{SystemError} from 'com/errors'
import validateZod from 'com/validations'

const createCharacter = (characterData, campaingId) => {
    
    try{
        validateZod.CharacterSchema.parse(characterData)

    
        return fetch(`${import.meta.env.VITE_API_URL}/characters`,{
            method: 'POST',
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(characterData)
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

export default createCharacter


// TODO cambiar nombres carpetas a minucula  y mover logic dentro de SRC
