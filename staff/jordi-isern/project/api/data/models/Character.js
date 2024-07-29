import {Schema, model, Types} from 'mongoose'

const {ObjectId} = Types

const character = new Schema({
    player: {
        type: ObjectId,
        ref: 'User'
    },
    image: {
        type: String
    },
    sice:{
        type: String
    },
    name: {
        type: String,
        required: true
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
    perdonalityTraits:{
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
    featuresAndTraits:{
        type: String
    },
    
    ExpiriencePoint:{
        type: Number,
        required: true
    },
    
    backgound:{
        type: String,
        required: true
    },
    aligment:{
        type: String,
        required: true
    },
    inspiration:{
        type: Boolean,
        required: true
    },
    armorClas:{
        type: Number,
        required: true
    },
    iniciative:{
        type: Number,
        required: true
    },
    hitPoint: {
        type:{
            macHitPoints:{
                type: Number,
                required: true
            },
            currentHitPoints: {
                type: Number,
                required: true
            },
            dice:{
                type: String
            }
        }
    },
    deathSaves:{
        type:{
            successes:{
                type: Number
            },
            fails:{
                type: Number
            }
        }
    },
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
    skills:{
        type:{
            acrobatics:{
                type: Number,
                required:true
            },
            animalHandling:{
                type: Number,
                required:true
            },
            arcana:{
                type: Number,
                required:true
            },
            athletics:{
                type: Number,
                required:true
            },
            deception:{
                type: Number,
                required:true
            },
            history:{
                type: Number,
                required:true
            },
            insight:{
                type: Number,
                required:true
            },
            intimidation:{
                type: Number,
                required:true
            },
            investigation:{
                type: Number,
                required:true
            },
            medicine:{
                type: Number,
                required:true
            },
            nature:{
                type: Number,
                required:true
            },
            perception:{
                type: Number,
                required:true
            },performance:{
                type: Number,
                required:true
            },
            persuasion:{
                type: Number,
                required:true
            },
            religion:{
                type: Number,
                required:true
            },
            sleightOfHand:{
                type: Number,
                required:true
            },
            stealth:{
                type: Number,
                required:true
            },
            survival:{
                type: Number,
                required:true
            }
        }
    },
    senses:{
        type:{
            sense:{
                type: String,
                required: true
            },
            modifier:{
                type: Number,
                required: true
            }
        }
    },
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
    lenguages:{
        type: String,
        required: true
    },
    money:{
        type:{
            coin: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    },
    otherProeficiencesAndLanguages: [{
        type: String
    }]
})


const Character = model('Character', character)
export default Character