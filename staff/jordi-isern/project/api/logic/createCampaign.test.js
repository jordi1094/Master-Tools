import 'dotenv/config.js'
import mongoose from 'mongoose'

import createcampaign from './createcampaign.js'
import handleErrorResponse from '../helper/handleErrorResponse.js'

const {MONGODB_URL} = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        try{
            createcampaign('66ae4c9691b33ad422133431', 'Dragon lance', ['66abb5a85dd227041b668270','66abb92917a2dbcf730239bf'], 'Ut sed ex quis purus lobortis aliquam sit amet eget neque. Aenean feugiat euismod sem, id tincidunt sapien fringilla id. Vestibulum ut odio vel magna consequat feugiat. Nullam et ipsum nec libero viverra laoreet a at dui. Integer ultricies, erat id hendrerit hendrerit, lorem metus dictum urna, et aliquet ipsum magna et turpis. Duis fermentum dolor vel mi hendrerit, quis tempor odio molestie. Cras a augue a erat tempus laoreet. Pellentesque dictum neque et semper fermentum. Sed eu tincidunt dolor, at convallis metus.','matar al dragon','66abc381442e777d219d5e75','../App/public/images/PortadasCampañas/Posrtada1.jpg')
            .then(() => console.log('campaign created'))
        }catch(error) {console.error(error)}
    })
    .catch(error => console.error(error))