import error, {SystemError} from 'com/errors'

const getCampaign = (targetCampaign) => {
    try {
        return fetch(`${import.meta.env.VITE_API_URL}/campaigns/${targetCampaign}`,{
            headers:{
                Authorization:`Bearer ${sessionStorage.token}`
            }
        })
        .catch((error) => {
            throw new SystemError('server error')})
        .then(response => {
            if(response.status === 200) {
                return response.json()
                .catch((error)=>{ throw new SystemError('server error')})
                .then(campaign => campaign)
            }
            return response.json()
            .catch ((error) => {throw new SystemError('server error')})
            .then(body => {
                const {error , message} = body
                const constructor = error[error]
                throw new constructor(message)
            })
        })   
    }catch(error){
        console.error(error.errors)
        return
    }
}

export default getCampaign