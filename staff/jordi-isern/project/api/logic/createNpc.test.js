import 'dotenv/config'
import mongoose from 'mongoose'

import createNpc from './createNpc.js'

const {MONGODB_URL} = process.env

mongoose.connect(MONGODB_URL)
    .then (() => {
        try{
            createNpc('66abbc8fc8469433f7b52e2e', 'Ambrosio', 'Ambrosio es un anciano sabio con una larga barba blanca y ojos penetrantes de un verde profundo. Viste una túnica de terciopelo azul adornada con símbolos arcanos. Es un erudito en magia antigua y se dedica a proteger antiguos secretos con un conocimiento vasto y misterioso. Su presencia impone respeto y su sabiduría guía a aquellos que buscan respuestas en el mundo arcano.','../App/public/images/jugadores/bardo humano.jpeg')
            .then(() => console.log('Npc created'))
        }catch(error) {console.error(error)}
    })
    .catch(error => console.error(error))