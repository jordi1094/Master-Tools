import {Schema, model, Types} from 'mongoose'

const { ObjectId} = Types

const campain = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref:'User'
    },
    title:{
        type: String,
        required: true
    },
    characters: [{
        type: ObjectId,
        ref:'Character'
    }],
    background:{
        type: String,
        required: true
    },
    objective: {
        type: String,
        required: true
    },
    StartLocation: {
        type: ObjectId,
        ref: 'Location'
    },
    missions: [{
        type: ObjectId,
        ref: 'Mision'
    }]
})

const Campain = model('Campain', campain)

export default Campain
