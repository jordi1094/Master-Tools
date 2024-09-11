import'dotenv/config'
import logic from "../logic/index.js";
import jwt from '../util/jasonwebtoken-promised.js'
import handleErrorResponse from "../helper/handleErrorResponse.js";
const {JWT_SECRET} = process.env


const getLocationsHandler = async (req, res) => {
    try {
        const token = req.headers.authorization.slice(7);
        const payload = await jwt.verify(token, JWT_SECRET); // Espera a que la verificación termine
        const { sub: userId } = payload;
        const { locationId } = req.params;
        
        const locations = await logic.getLocations(userId, locationId); // Espera a que se obtengan las ubicaciones
        console.log(locations); // Esto se ejecuta después de obtener las ubicaciones
        
        res.status(200).json(locations);
    } catch (error) {
        handleErrorResponse(error, res); // Manejo de errores
    }
}


// const getLocationsHandler = ( req, res) => {
//     const token = req.headers.authorization.slice(7)
//     jwt.verify(token, JWT_SECRET)
//     .then(payload => {
//       const {sub:userId} = payload
      
//       const {locationId} = req.params
      
//       return logic.getLocations(userId, locationId) // Línea 14
//         .then(locations => {
//           console.log(locations) // Línea 16
//           res.status(200)
//           res.json(locations)
//         })
//         .catch(error => handleErrorResponse(error, res))
//     })
// }

 export default getLocationsHandler


