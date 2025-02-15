import { Schema,model} from "mongoose";

 export const mainSkill = new Schema({
    score:{
        type: Number,
        required: true
    },
    modifier:{
        type: Number,
        required: true
    }
})

const MainSkill= model('MainSkill', mainSkill)

export default MainSkill