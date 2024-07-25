import { Schema, model, Types } from "mongoose";

const { ObjectId} = Types

const ubication = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref:'User'
    },
    title:{
        type: String,
        required: true
    },
    npcList: [{
        type: ObjectId,
        ref: 'Npc'
    }],
    enemyList:[{
        type: ObjectId,
        ref: 'Enemy'
    }],
    objectsList: [{
        //TODO no estoy seguro en principio no ha de tener Id por que es extraido de la api la información del objeto
        type: ObjectId,
        ref: 'Object'
    }],
    history: {
        type: String,
        required: true
    },
    ubicationsToGo: [{
        type: ObjectId,
        ref:'Ubication'
    }]
})

const Ubication = model('Ubication', ubication)

export default Ubication