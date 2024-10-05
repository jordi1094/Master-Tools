import errors, {SystemError} from 'com/errors'
import {toast} from 'sonner'

const getCharacters = (campaignId) =>{
    try {
        return fetch(`${import.meta.env.VITE_API_URL}/characters/${campaignId}`,{
            headers:{
                Authorization:`Bearer ${sessionStorage.token}`
            }
        })
        .catch(() => {
            throw new SystemError('server error')})
        .then(response => {
            if(response.status === 200) {
                return response.json()
                .catch(()=> {throw new SystemError('server error')})
                .then(characters => characters)
            }
            return response.json()
            .catch((error)=> {throw new SystemError('server error')})
            .then(body => {
                const {error, message} = body
                const constructor = errors[error]
                throw new constructor(message)
            })
        })
    } catch (error) {
        toast.error(error.message)
        return
    }
}

export default getCharacters