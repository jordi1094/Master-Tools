import {Schema, model} from 'mongoose'

const { ObjectId } = Schema.Types


const mission = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref:'User'
    },
    title:{
        type: String,
        required: true
    },
    background:{
        type: String,
        required: true
    },
    objective: {
        type: String,
        required: true
    },
    startLocation: {
        type: ObjectId,
        ref: 'Ubication'
    },
    checkList:[{
        type: {
            task: {
                type: String,
                required: true
            },
            estatus: {
                type: Boolean
            }
        }
    }]
})

const Mission = model('Mision', mission)

export default Mission