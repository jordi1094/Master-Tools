import {Schema, model} from 'mongoose'
import {hitPoints} from './HitPoints.js'
import {skills} from './Skills.js'
import {sense} from './Sense.js'
import {action} from './Action.js'
import { mainSkill } from './MainSkill.js'

const { ObjectId } = Schema.Types


const npc = new Schema({
    author: {
        type: ObjectId,
        ref: 'User'
    },
    image: {
        type: String
    },

    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    race:{
        type: String,
        required: true
    },
    alignment:{
        type: String,
        required: true
    },
    armorClass:{
        type: Number,
        required: true
    },
    hitPoint: {hitPoints},
    speed:{
        type:Number,
        required: true
    },
    strength:{mainSkill},
    dexterity:{mainSkill},
    constitution:{mainSkill},
    iniciative:{mainSkill},
    wishdom:{mainSkill},
    charisma:{mainSkill},
    skill:{
        name:{type: String},
        modifier:{type: Number}
    },
    senses:[{
        type:String
    }],
    lenguages:{
        type: String
    },
    challengeRating:{
        type: Number,
        required: true
    },
    acctions: [action],
    location:[{
        type: ObjectId,
        ref: 'Location'
    }]
})

const Npc = model('Npc', npc)

export default Npc