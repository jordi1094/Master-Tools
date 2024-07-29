import { Schema, model, Types } from "mongoose";

const { ObjectId} = Types

const location = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref:'User'
    },
    title:{
        type: String,
        required: true
    },
    npcs: [{
        type: ObjectId,
        ref: 'Npc'
    }],
    enemies:[{
        type: ObjectId,
        ref: 'Enemy'
    }],
    objects: [{
        type: String, // index api D&D 5e SRD API
    }],
    history: {
        type: String,
        required: true
    },
    nextLocations: [{
        type: ObjectId,
        ref:'Locations'
    }]
})

const Ubication = model('Locations', location)

export default Ubication