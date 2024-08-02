import 'dotenv/config'
import mongoose from 'mongoose'

import createMission from './createMission.js'

const {MONGODB_URL} = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        try{
            createMission('66abdd10036f01bc40cebd17', 'La espada perdida', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam vehicula purus et augue faucibus, in dignissim lacus tincidunt. Maecenas nec purus nisi. Quisque vehicula arcu sit amet ex egestas, nec malesuada diam consequat. Donec posuere arcu ut risus pharetra, a fringilla metus tristique. Sed dapibus, ligula sed dignissim iaculis, lorem lectus sodales lacus, non suscipit purus felis vitae turpis.','Proin sit amet nisi sit amet velit tincidunt congue. In hac habitasse platea dictumst. Fusce non augue sit amet orci tempor consectetur non et felis. Nullam at ipsum sit amet tortor vulputate scelerisque a at sapien. Integer euismod malesuada mi. Integer commodo eros id turpis varius, ac hendrerit lectus lacinia. Etiam scelerisque, ex et dictum euismod, dui nisi elementum massa, nec bibendum nulla magna in nunc.','66abc381442e777d219d5e75', [{task:'encontrar la espada',status: false}, {task:'hablar con los guardias',status: true}])
                .then(() => console.log('Mision created'))
        }catch(error) { console.error(error)}
    })
    .catch(error => console.error(error))