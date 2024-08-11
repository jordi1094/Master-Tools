import errors,{SystemError} from 'com/errors'

const createCharacter = (data) => {
    return fetch(`${import.meta.env.VITE_API_URL}/characters`,{
        method: 'POST',
        headers:{
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .catch(() => {throw new SytemError('server error')})
    .then(response => {
        if (response.status === 201)
            return

        return response.json()
            .catch(() => {throw new SystemError('server error')})
            .then(body => {
                const {error, message } = body

                const constructor = error[error]

                throw new constructor(message)
            })
    })    
}

export default createCharacter