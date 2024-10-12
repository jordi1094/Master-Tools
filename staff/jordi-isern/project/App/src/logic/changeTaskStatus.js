import error, {SystemError} from 'com/errors'

const changeTaskStatus = (missionId, task) => {
    try{
        return fetch(`${import.meta.env.VITE_API_URL}/mission/${missionId}`,{
            method:'PATCH',
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .catch((error)=> {throw new SystemError('server error')})
        .then(response => {
            if(response.status === 204) {return}

            return response.json()
            .catch((error) => {throw new SystemError('server error')})
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

export default changeTaskStatus