import {Schema, model} from 'mongoose'
import Task from './Task.js'

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
    checkList:[Task]
})

const Mission = model('Mission', mission)

export default Mission