import {Schema, model} from 'mongoose'

const { ObjectId } = Schema.Types


const campaign = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref:'User'
    },
    title:{
        type: String,
        required: true
    },
    background:{
        type: String,
        required: true
    },
    objective: {
        type: String,
        required: true
    },
    startLocation: {
        type: ObjectId,
        ref: 'Location'
    },
    image: {
        type: String
    }
    
})

const Campaign = model('campaign', campaign)

export default Campaign
