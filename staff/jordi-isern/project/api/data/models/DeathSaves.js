import { Schema, model } from "mongoose";

export const  deathSaves = new Schema({
    strength:{
                type: Number,
                required: true

    },
    dexterity:{
                type: Number,
                required: true
    },
    constitution:{
                type: Number,
                required: true
    },
    iniciative:{
                type: Number,
                required: true
    },
    wishdom:{
                type: Number,
                required: true
    },
    charisma:{
                type: Number,
                required: true
    },
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

const DeathSaves= model('DeathSaves', deathSaves)

export default DeathSaves