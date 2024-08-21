import 'dotenv/config.js'
import mongoose from 'mongoose'

import createcampaign from './createcampaign.js'

const {MONGODB_URL} = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        try{
            createcampaign('66ae4c9691b33ad422133431',' ',[],' ',' ')
            .then((campaign) => console.log('campaign created',campaign._id))
        }catch(error) {console.error(error)}
    })
    .catch(error => console.error(error))