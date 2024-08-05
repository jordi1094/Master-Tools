import {Schema, model} from 'mongoose'

const { ObjectId } = Schema.Types


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
        type: String,// index api D&D 5e SRD API
    }],
    objects: [{
        type: String, // index api D&D 5e SRD API
    }],
    description: {
        type: String,
        required: true
    },
    nextLocations: [{
        type: ObjectId,
        ref:'Locations'
    }],
    missions: [{
        type: ObjectId,
        ref: 'Mision'
    }]
})

const Ubication = model('Locations', location)

export default Ubication