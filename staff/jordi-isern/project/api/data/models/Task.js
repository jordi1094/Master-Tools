import { Schema, model } from "mongoose";

export const task = new Schema({
    task: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Task = model('Task', task)

export default Task

