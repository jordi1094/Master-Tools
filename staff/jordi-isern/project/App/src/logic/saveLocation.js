import error, {SystemError} from 'com/errors'

const saveLocation = (id, newLocationData) => {
    try{
        return fetch(`${import.meta.env.VITE_API_URL}/locations/${id}`,{
            method:'PATCH',
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newLocationData)
        })
        .catch(()=> {throw new SystemError('server error')})
        .then(response => {
            if(response.status === 204){
                return
            }
            return response.json()
                .catch(() => {throw new SystemError('server error')})
                .then(body => {
                    const {error, message} = body
                    const constructor = error[error]
                    throw new constructor(message)
                })
        })
    }catch (error){
        connsole.error(error.errors)
        return
    }
}

export default saveLocation