import {Schema, model} from 'mongoose'
import HitPoints from './HitPoints.js'
import Skills from './Skills.js'
import Sense from './Sense.js'
import Action from './Action.js'

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
    aligment:{
        type: String,
        required: true
    },
    armorClas:{
        type: Number,
        required: true
    },
    hitPoint: {HitPoints},
    speed:{
        type:Number,
        required: true
    },
    strength:{
        type:{
            StrengthScore:{
                type: Number,
                required: true
            },
            StrengthModifier:{
                type: Number,
                required: true
            }
        }
    },
    dexterity:{
        type:{
            dexterityScore:{
                type: Number,
                required: true
            },
            dexterityModifier:{
                type: Number,
                required: true
            }
        }
    },
    constitution:{
        type:{
            constitutionScore:{
                type: Number,
                required: true
            },
            constitutionModifier:{
                type: Number,
                required: true
            }
        }
    },
    iniciative:{
        type:{
            iniciativeScore:{
                type: Number,
                required: true
            },
            iniciativeModifier:{
                type: Number,
                required: true
            }
        }
    },
    wishdom:{
        type:{
            wishdomScore:{
                type: Number,
                required: true
            },
            wishdomModifier:{
                type: Number,
                required: true
            }
        }
    },
    charisma:{
        type:{
            charismaScore:{
                type: Number,
                required: true
            },
            charismaModifier:{
                type: Number,
                required: true
            }
        }
    },
    skills:{Skills},
    senses:[Sense],
    lenguages:{
        type: String
    },
    challengeRatin:{
        type: Number
    },
    acctions: [Action]
})

const Npc = model('Npc', npc)

export default Npc