import error , {SystemError} from 'com/errors'
import { Campaign } from '../../../api/data/models'

const getCampaigns = () => {
    try{
        return fetch(`${import.meta.env.VITE_API_URL}/campaigns`, {
            headers:{
                Authorization:`Bearer ${sessionStorage.token}`
            }
        })
        .catch(error => {
            throw new SystemError('server error')
        })
        .then(response => {
            if(response.status  === 200) {
                return response.jason()
                .catch(error => {throw new SystemError('server error')})
                .then(campaigns => campaigns)
            }
            return response.json()
            .catch( error => { throw new SystemError('server error')})
            .then(body => {
                const { error , message} = body
                const constructor = error[error]
                throw new constructor(message)
            })
        })
    }catch(error) {
        console.error (error.erros)
        return
    }
}

export default getCampaigns