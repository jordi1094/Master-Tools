import { Schema, model } from "mongoose";

export const money = new Schema({
    type: {
        copper: {
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

const Money = model('Money', money)

export default Money