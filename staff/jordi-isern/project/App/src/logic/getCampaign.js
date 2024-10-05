import errors, {SystemError} from 'com/errors'
import {toast} from 'sonner'

const getCampaign = (targetCampaign) => {
    try {
        return fetch(`${import.meta.env.VITE_API_URL}/campaigns/${targetCampaign}`,{
            headers:{
                Authorization:`Bearer ${sessionStorage.token}`
            }
        })
        .catch(() => {
            throw new SystemError('Server error')})
        .then(response => {
            if(response.status === 200) {
                return response.json()
                .catch(()=>{ throw new SystemError('Server error')})
                .then(campaign => campaign)
            }
            return response.json()
            .catch (() => {throw new SystemError('Server error')})
            .then(body => {
                const {error , message} = body
                const constructor = errors[error]
                throw new constructor(message)
            })
        })   
    }catch(error){
        toast.error(error.message)
        return
    }
}

export default getCampaign