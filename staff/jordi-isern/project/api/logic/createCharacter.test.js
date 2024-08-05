import 'dotenv/config'
import mongoose from 'mongoose'

import createCharacter from './createCharacter.js'

const {MONGODB_URL} = process.env

mongoose.connect(MONGODB_URL)
    .then (() => {
        try{
            createCharacter('66abb4914aef6316caa6c825', 'Legolas','../App/public/images/jugadores/bardo humano.jpeg' )
            .then(() => console.log('Character created'))
        }catch(error) {console.error(error)}
    })
    .catch(error => console.error(error))