import { ContentError, MatchError } from "./errors.js"

const USERNAME_REGEX = /^[\w-]+$/
const PASSWORD_REGEX = /^[\w$%&=\[\]\{\}\<\>\(\)]{8,}$/
const ID_REGEX = /^[0-9a-z-_]+$/i
const NAME_REGEX = /^[a-zA-Z=\[\]\{\}\<\>\(\)]{1,}$/
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


function validateUsername(username, explain = 'username'){
    if(typeof username !=='string' || !USERNAME_REGEX.test(username)){
        throw new ContentError(`${explain} is not valid`)
    }
}

function validatePasword(password){
    if(!PASSWORD_REGEX.test(password)|| typeof password !== 'string'){
        throw new ContentError('password is not valid')
    }
}

function validatePasswordsMatch(password, passwordRepeat) {
    if (password !== passwordRepeat)
        throw new MatchError('passwords don\'t match')
}

function validateID(id, explain = 'id'){
    if(!ID_REGEX.test(id) || typeof id !== 'string'){
        throw new ContentError(`${explain} is not valid`)
    }
}

function validateCallback(callback){
    if(typeof callback !== 'function'){
        throw new TypeError('callback is not a function')
    }
}

function validateName(name, explain = 'name'){
    if (!NAME_REGEX.test(name)) {
        throw new ContentError(`${explain} is not valid`)
    }
}

function validateEmail (email){
    if (!EMAIL_REGEX.test(email)) {
        throw new ContentError('email is not valid')
    }
}

function validateText(text, explain ='text', maxLength = Infinity){
    if (typeof text !== 'string' || !text.length || text.length > maxLength){
        throw new ContentError(`${explain} is not valid`)
    }
}

function validateURL (url, explain = 'url') {
    if (typeof url !== 'string' || !url.startsWith('http')) {throw new ContentError(`${explain} is not valid`)}
}

function validateImage (url) {
    if (typeof url !== 'string') {throw new ContentError(`${explain} is not valid`)}
}

function validateRole(role){
    if(typeof role !== 'string' ){throw new ContentError('The Role data is not correct')}
    // TODO if(role !== 'Master' ||4 role !== 'Player'){ throw new ContentError('The Role data is not correct 2')}
}

function validateAray(array, explain = 'array'){
    if(!Array.isArray(array)){throw new ContentError(`${explain} is not an array`)}
}
const validate = {
    username: validateUsername,
    password: validatePasword,
    passwordMatch: validatePasswordsMatch,
    callback: validateCallback,
    name: validateName,
    id: validateID,
    email: validateEmail,
    text: validateText,
    url: validateURL,
    role: validateRole,
    image: validateImage,
    array: validateAray
}
export default validate