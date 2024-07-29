import {Schema, model, Types} from 'mongoose'

const { ObjectId } = Types

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
    campains: [{
            type: ObjectId,
            ref: 'Campain'
    }]
})

const User = model('User', user)

export default User