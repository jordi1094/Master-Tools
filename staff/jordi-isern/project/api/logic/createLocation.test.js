import 'dotenv/config'
import mongoose from 'mongoose'

import createLocation from './createLocation.js'

const {MONGODB_URL} = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        try{
            createLocation('66abbc8fc8469433f7b52e2e', 'tuneles de los enanos',"En un rincón apartado del mundo, rodeado de montañas y ríos cristalinos, se encontraba un pequeño pueblo llamado Luminaria. Sus habitantes vivían en armonía con la naturaleza, dedicándose a la agricultura y al cuidado de sus animales. Cada año, celebraban el Festival de las Luces, donde todas las casas se iluminaban con linternas de colores, creando un espectáculo mágico. Los niños corrían por las calles, riendo y jugando, mientras los ancianos contaban historias de tiempos pasados. Era un lugar donde el tiempo parecía detenerse, permitiendo que la felicidad y la paz reinaran eternamente.",['66abbcc4a6b343813baf5dd7','66abbabd072a422d09702c95'],[], [] )
                .then(() => console.log('Location created'))
            }catch(error) { console.error(error)}
        })
        .catch(error => console.error(error))