import errors, {SystemError} from "com/errors"

const getNpc = (targetNpc) => {
    try{
        return fetch(`${import.meta.env.VITE_API_URL}/npcs/getOne/${targetNpc}`,{
            headers:{
                Authorization:`Bearer ${sessionStorage.token}`
            }
        })
        .catch(error => {
            throw new SystemError('server error')
        })
        .then(response => {
            if(response.status === 200){
                return response.json()
                .catch(error => {throw new SystemError('server error')})
                .then(npc => npc) 
            }
            return response.json()
            .catch(error => {throw new SystemError('server error')})
            .then(body => {
                const {error, message} = body
                const constructor = error[error]
                throw new constructor(message)
            })
        })
    }catch(error) {
        console.error(error.errors)
    }
}

export default getNpc