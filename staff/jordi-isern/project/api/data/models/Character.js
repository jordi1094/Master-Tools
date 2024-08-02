import {Schema, model} from 'mongoose'

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
    }
    // sice:{
    //     type: String
    // },
    // race:{
    //     type: String,
    //     required: true
    // },
    // class:{
    //     type: String,
    //     required: true
    // },
    // level:{
    //     type: Number,
    //     requir : true
    // }, 
    // backgound:{
    //     type: String,
    //     required: true
    // },   
    // aligment:{
    //     type: String,
    //     required: true
    // },    
    // expiriencePoint:{
    //     type: Number,
    //     required: true
    // },
    // inspiration:{
    //     type: Boolean,
    //     required: true
    // },
    // proficiencyBonus:{
    //     type: Number,
    //     required:true
    // },
    // armorClas:{
    //     type: Number,
    //     required: true
    // },
    // iniciative:{
    //     type: Number,
    //     required: true
    // },
    // speed:{
    //     type:Number,
    //     required: true
    // },
    // strength:{
    //     type:{
    //         score:{
    //             type: Number,
    //             required: true
    //         },
    //         modifier:{
    //             type: Number,
    //             required: true
    //         }
    //     }
    // },
    // dexterity:{
    //     type:{
    //         score:{
    //             type: Number,
    //             required: true
    //         },
    //         modifier:{
    //             type: Number,
    //             required: true
    //         }
    //     }
    // },
    // constitution:{
    //     type:{
    //         score:{
    //             type: Number,
    //             required: true
    //         },
    //         modifier:{
    //             type: Number,
    //             required: true
    //         }
    //     }
    // },
    // iniciative:{
    //     type:{
    //         score:{
    //             type: Number,
    //             required: true
    //         },
    //         modifier:{
    //             type: Number,
    //             required: true
    //         }
    //     }
    // },
    // wishdom:{
    //     type:{
    //         score:{
    //             type: Number,
    //             required: true
    //         },
    //         modifier:{
    //             type: Number,
    //             required: true
    //         }
    //     }
    // },
    // charisma:{
    //     type:{
    //         score:{
    //             type: Number,
    //             required: true
    //         },
    //         modifier:{
    //             type: Number,
    //             required: true
    //         }
    //     }
    // },   
    // skills:{
    //     
    // },
    // senses:{
    //     type:{
    //         sense:{
    //             type: String,
    //             required: true
    //         },
    //         modifier:{
    //             type: Number,
    //             required: true
    //         }
    //     }
    // },
    // equipment: [{
    //     type:{
    //         type: String,
    //         required: true
    //     }
    // }],
    // weapons: [{
    //     type:{
    //         type: String,
    //         required: true
    //     }
    // }],
    // attacsAndSpellcasting:{
    //     type:{
    //         type: String,
    //         required: true
    //     }
    // },
    // money:{
    //     type:{
    //         coin: {
    //             type: String,
    //             required: true
    //         },
    //         quantity: {
    //             type: Number,
    //             required: true
    //         }
    //     }
    // },
    // personalityTraits:{
    //     type: String,
    //     required: true
    // },
    // ideals:{
    //     type: String,
    //     required: true
    // },
    // bonds:{
    //     type: String,
    //     required: true
    // },
    // flaws:{
    //     type: String,
    //     required: true
    // },
    // hitPoint: {
    //     type:{
    //         macHitPoints:{
    //             type: Number,
    //             required: true
    //         },
    //         currentHitPoints: {
    //             type: Number,
    //             required: true
    //         },
    //         dice:{
    //             type: String
    //         }
    //     }
    // },
    // deathSaves:{
    //     type:{
    //         successes:{
    //             type: Number
    //         },
    //         fails:{
    //             type: Number
    //         }
    //     }
    // },
    // featuresAndTraits:{
    //     type: String
    // },
    // otherProeficiencesAndLanguages:{
    //     type: String,
    //     required: true
    // }
})


const Character = model('Character', character)
export default Character