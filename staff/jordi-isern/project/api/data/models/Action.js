import { Schema } from "mongoose";

const Action = new Schema({
    name:{
        type: String,
        required: true
    },description: {
        type: String,
        required: true
    }
})

export default Action