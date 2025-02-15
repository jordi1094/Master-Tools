import { Schema, model } from "mongoose";

export const action = new Schema({
    name:{
        type: String,
        required: true
    },description: {
        type: String,
        required: true
    }
})

const Action = model('Action', action)

export default Action