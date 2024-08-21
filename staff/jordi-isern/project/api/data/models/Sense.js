import { Schema, model } from "mongoose";

export const sense = new Schema({
    sense:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    }
})

const Sense = model('Sense', sense)

export default Sense