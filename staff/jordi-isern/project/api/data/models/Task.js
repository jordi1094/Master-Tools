import { Schema } from "mongoose";

const Task = new Schema({
    task: {
        type: String,
        required: true
    },
    status: {
        type: Boolean
    }
})

export default Task

