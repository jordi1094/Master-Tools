import {Schema, model} from 'mongoose'
import Skills from './Skills.js'
import Sense from './Sense.js'
import HitPoints from './HitPoints.js'
import DeathSaves from './DeathSaves.js'
import Money from './Money.js'
const { ObjectId } = Schema.Types


const character = new Schema({
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
    sice:{
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
    backgound:{
        type: String,
        required: true
    },   
    aligment:{
        type: String,
        required: true
    },    
    expiriencePoint:{
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
    strength:{
        type:{
            score:{
                type: Number,
                required: true
            },
            modifier:{
                type: Number,
                required: true
            }
        }
    },
    dexterity:{
        type:{
            score:{
                type: Number,
                required: true
            },
            modifier:{
                type: Number,
                required: true
            }
        }
    },
    constitution:{
        type:{
            score:{
                type: Number,
                required: true
            },
            modifier:{
                type: Number,
                required: true
            }
        }
    },
    iniciative:{
        type:{
            score:{
                type: Number,
                required: true
            },
            modifier:{
                type: Number,
                required: true
            }
        }
    },
    wishdom:{
        type:{
            score:{
                type: Number,
                required: true
            },
            modifier:{
                type: Number,
                required: true
            }
        }
    },
    charisma:{
        type:{
            score:{
                type: Number,
                required: true
            },
            modifier:{
                type: Number,
                required: true
            }
        }
    },   
    skills:{
        type: Skills
    },
    senses:[Sense],
    equipment: [{
        type:{
            type: String,
            required: true
        }
    }],
    weapons: [{
        type:{
            type: String,
            required: true
        }
    }],
    attacsAndSpellcasting:{
        type:{
            type: String,
            required: true
        }
    },
    money:{Money},
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
    hitPoints:{
        HitPoints
    },
    deathSaves:{DeathSaves},
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