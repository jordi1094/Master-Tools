import {Schema, model} from 'mongoose'

const { ObjectId } = Schema.Types


export const campaign = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref:'User'
    },
    title:{
        type: String,
    },
    background:{
        type: String,
    },
    objective: {
        type: String,
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
