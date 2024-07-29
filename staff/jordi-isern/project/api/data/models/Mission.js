import { Schema, model, Types } from "mongoose";

const { ObjectId} = Types

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
    StartLocation: {
        type: ObjectId,
        ref: 'Ubication'
    },
    objectives:[{
        type: {
            objective: {
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