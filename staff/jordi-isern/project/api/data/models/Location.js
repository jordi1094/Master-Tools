import {Schema, model} from 'mongoose'

const { ObjectId } = Schema.Types


const location = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref:'User'
    },
    name:{
        type: String,
        required: true
    },
    enemies:[{
        type:{
            name: String,
            image: String
        }
    }],
    objects: [{
        type: String
    }],
    description: {
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