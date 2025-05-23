import jwt from 'jsonwebtoken'

const {JsonWebTokenError, TokenExpiredError} = jwt

function sign(payload, secret, option) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload,secret,option,(error, token) => {
            if(error){
                reject(error)
                return
            }
            resolve(token)
        })
    })
}

function verify(token, secret) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (error, payload) =>{
            if(error) {
                reject(error)

                return
            }
            resolve(payload)
        })
    })
}

const jsonwebtoken = {
    sign,
    verify,
    JsonWebTokenError,
    TokenExpiredError
}

export default jsonwebtoken