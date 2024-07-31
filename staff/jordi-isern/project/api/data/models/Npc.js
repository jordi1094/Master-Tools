import {Schema, model} from 'mongoose'

const { ObjectId } = Schema.Types


const npc = new Schema({
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
    hitPoint: {
        type:{
            macHitPoints:{
                type: Number,
                required: true
            },
            currentHitPoints: {
                type: Number,
                required: true
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
                type: String
            },
            modifier:{
                type: Number
            }
        }
    },
    lenguages:{
        type: String
    },
    challengeRatin:{
        type: Number
    },
    acctions: [{
        action:{
            type: String
        },
        description:{
            type: String
        }
    }]
})

const Npc = model('Npm', npc)

export default Npc