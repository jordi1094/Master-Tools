import error, {SystemError} from 'com/errors'

const createLocation = () => {
    try {
        return fetch(`${import.meta.env.VITE_API_URL}/location`,{
            method: 'POST',
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            }
        })
        .catch(error => {throw new SystemError('server error')})
        .then(response => {
            if(response.status === 201){
                return response.json()
                .catch(error => {throw new SystemError('server error')})
                .then(location => location)
            }
            return response.json()
                .catch(error => {throw new SystemError('server error')})
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

export default createLocation