import 'dotenv/config.js'
import mongoose from 'mongoose'
import getCampaign from './getCampaign.js'

const {MONGODB_URL} = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        try{
            getCampaign('66c6145f2483f8c1657ca7bb')
            .then((campaign) => console.log(campaign))
        }catch(error){ console.error(error)}
    })
    .catch(error => console.error(error))