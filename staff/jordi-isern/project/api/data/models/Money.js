import { Schema } from "mongoose";

const Money = new Schema({
    type: {
        coppper: {
            type: Number,
            default: 0
        },
        silver: {
            type: Number,
            default: 0
        },
        electrum: {
            type: Number,
            default: 0
        },
        gold: {
            type: Number,
            default: 0
        },
        platinium: {
            type: Number,
            default: 0
        }
    }
})

export default Money