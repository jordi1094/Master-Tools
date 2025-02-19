import {Schema, model} from 'mongoose'

const { ObjectId } = Schema.Types

const user = new Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
      type: String,
      required:true
    },
    characters: [{
            type: ObjectId,
            ref: 'Character'
    }],
    campaigns: [{
            type: ObjectId,
            ref: 'Campaign'
    }]
})

const User = model('User', user)

export default User