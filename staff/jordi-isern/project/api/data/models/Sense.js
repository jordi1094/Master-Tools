import { Schema } from "mongoose";

const Sense = new Schema({
    sense:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    }
})

export default Sense