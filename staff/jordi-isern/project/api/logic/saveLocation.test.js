import 'dotenv/config'
import mongoose from 'mongoose'
import saveLocation from './saveLocation'
import { Types } from 'mongoose'
const {ObjectId} = Types

const {MONGODB_URL} = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        try{
            saveLocation('66abbc8fc8469433f7b52e2e',{name: "Mysterious Forest", enemies: ["Goblin", "Troll"], objects: ["Ancient Sword", "Mystic Potion"], description: "A dark and dense forest filled with unknown dangers and hidden treasures.", nextLocations: [new ObjectId.toString(),new ObjectId.toString()]
            })
                .then(() => console.log('Location created'))
            }catch(error) { console.error(error)}
        })
        .catch(error => console.error(error))