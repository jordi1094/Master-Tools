import error, {SystemError} from 'com/errors'

const deleteCampaign = (campaignId) => {
    try {
        return fetch(`${import.meta.env.VITE_API_URL}/campaign/delete/${campaignId}`,{
            method:'DELETE',
            headers:{
                Authorization: `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            }
        })
        .catch(() => {throw new SystemError('server error')})
        .then(response => {
            if(response.status === 204){return}

            return response.json()
            .catch(() => {throw new SystemError('server error')})
            .then(body => {
                const {error , message} = body
                const constructor = error[error]
                throw new constructor(message)
            })
        })
    } catch (error) {
        return (error)
    }
}

export default deleteCampaign