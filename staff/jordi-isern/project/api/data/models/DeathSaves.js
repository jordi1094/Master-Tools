import { Schema } from "mongoose";

const  DeathSaves = new Schema({
    deathSavesSucceses:{
        type: Number,
        enum:[0,1,2,3],
        default: 0,
        required: true
    },
    deathSavesFailures:{
        type: Number,
        enum:[0,1,2,3],
        default: 0,
        required: true
    }
})

export default DeathSaves