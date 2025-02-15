import {Schema, model} from 'mongoose'

const { ObjectId } = Schema.Types


const location = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref:'User'
    },
    name:{
        type: String
    },
    enemies:[{type: String}],
    objects: [{
        type: String
    }],
    description: {
        type: String
    },
    nextLocations: [{
        type: ObjectId,
        required:true,
        ref:'Location'
    }]
})

const Location = model('Location', location)

export default Location