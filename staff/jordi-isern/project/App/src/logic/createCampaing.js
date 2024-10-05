import errors, {SystemError} from 'com/errors'
import {toast} from 'sonner'

const createCampaing = () => {
    try{
        return fetch(`${import.meta.env.VITE_API_URL}/campaigns`,{
            method: 'POST',
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            }
        })
        .catch((error) => {throw new SystemError('server error')})
        .then(response => {
            if(response.status === 201){
                return response.json()
                .catch((error) => {throw new SystemError('server error')})
                .then(campaign => campaign)
            }
            return response.json()
                .catch((error) => {throw new SystemError('server error')})
                .then(body => {
                    const {error, message} = body
                    const constructor = errors[error]
                    throw new constructor(message)
                })
        })
    }catch(error) {
        toast.error(error)
        return
    }
}

export default createCampaing