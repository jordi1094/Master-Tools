import { model, Schema } from "mongoose";

export const hitPoints = new Schema({
    maxHitPoints:{
        type: Number,
        required: true
    },
    currentHitPoints: {
        type: Number,
        required:true 
    },
    temporalHitPoints: {
        type: Number,
        required:true 
    },
    dice: {
        type: String,
    }
})

const HitPoints = model('HitPoints', hitPoints)

export default HitPoints