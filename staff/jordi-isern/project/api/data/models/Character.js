import {Schema, model} from 'mongoose'
import {skills} from './Skills.js'
import {sense} from './Sense.js'
import {hitPoints} from './HitPoints.js'
import {deathSaves} from './DeathSaves.js'
import {money} from './Money.js'
import {mainSkill} from './MainSkill.js'
const { ObjectId } = Schema.Types


const character = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required:true
    },
    campaing:{
        type: ObjectId,
        ref: 'Campaing',
        required: true
    },
    image: {
        type: String
    },

    name: {
        type: String,
        required: true
    },
    size:{
        type: String
    },
    race:{
        type: String,
        required: true
    },
    class:{
        type: String,
        required: true
    },
    level:{
        type: Number,
        requir : true
    }, 
    background:{
        type: String,
        required: true
    },   
    alignment:{
        type: String,
        required: true
    },    
    expiriencePoints:{
        type: Number,
        required: true
    },
    inspiration:{
        type: Boolean,
        required: true
    },
    proficiencyBonus:{
        type: Number,
        required:true
    },
    armorClass:{
        type: Number,
        required: true
    },
    iniciative:{
        type: Number,
        required: true
    },
    speed:{
        type:Number,
        required: true
    },
    strength: mainSkill,
    dexterity: mainSkill,
    constitution: mainSkill,
    iniciativeSkill: mainSkill,
    wishdom: mainSkill,
    charisma: mainSkill,   
    skills: skills,
    senses: [sense],
    equipment:{
        type: String,
        required: true
    },
    weapons: [{type: String}],
    attacksAndSpellcasting:{
        type: String,
        required: true

    },
    money:money,
    personalityTraits:{
        type: String,
        required: true
    },
    ideals:{
        type: String,
        required: true
    },
    bonds:{
        type: String,
        required: true
    },
    flaws:{
        type: String,
        required: true
    },
    hitPoints:hitPoints,
    deathSaves:deathSaves,
    featuresAndTraits:{
        type: String
    },
    otherProeficiencesAndLanguages:{
        type: String,
        required: true
    }
})


const Character = model('Character', character)
export default Character