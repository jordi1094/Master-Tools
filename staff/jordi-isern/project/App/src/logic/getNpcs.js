import error, {SystemError} from  'com/errors'

const getNpcs = (locationId) => {
    try {
        return fetch(`${import.meta.env.VITE_API_URL}/npcs/${locationId}`,{
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
                .then(npcs => npcs)
            }
            return response.json()
            .catch(()=> {throw new SystemError('server error')})
            .then(body => {
                const {error, message} = body
                const constructor = error[error]
                throw new constructor(message)
            })
        })
    } catch (error) {
        console.error(error.errors)
        return
    }
}
export default getNpcs