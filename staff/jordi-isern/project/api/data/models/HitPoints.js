import { Schema } from "mongoose";

const HitPoints = new Schema({
    maxHitpoints:{
        type: Number,
        required: true
    },
    currentHitPoints: {
        type: Number,
        required:true 
    },
    dice: {
        type: String,
        required: true
    }
})

export default HitPoints