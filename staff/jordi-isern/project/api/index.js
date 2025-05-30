import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import jwt from './util/jasonwebtoken-promised.js'

import routeHandler from './handlers/index.js'



const {MONGODB_URL, PORT} = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        const { JsonWebTokenError, TokenExpiredError } = jwt

        const api = express()

        api.use(cors())

        api.get('/', (req, res) => res.send('Hello, World!'))

        const jsonBodyParser = express.json({ strict: true, type: 'application/json' })

        api.post('/users', jsonBodyParser, routeHandler.registerUserHandler)

        api.post('/users/auth', jsonBodyParser, routeHandler.authenticateUserHandler)

        api.post('/campaigns', jsonBodyParser, routeHandler.createCampaignHandler)

        api.post('/characters', jsonBodyParser, routeHandler.createCharacterHandler)

        api.post('/locations', jsonBodyParser, routeHandler.createLocationHandler)

        api.post('/npcs', jsonBodyParser, routeHandler.createNpcHandler)

        api.post('/location', jsonBodyParser, routeHandler.createLocationHandler)

        api.post('/missions', jsonBodyParser, routeHandler.createMissionHandler)

        api.get('/campaigns/:targetCampaign', routeHandler.getCampaignHandler)

        api.get('/campaigns', routeHandler.getCampaigsnHandler)

        api.get('/characters/:targetCampaign',routeHandler.getCharactersHandler)

        api.get('/characters/getOne/:targetCharacter', routeHandler.getCharacterHandler)

        api.get('/locations/nextlocations/:locationId',routeHandler.getLocationsHandler)
        
        api.get('/npcs/:targetLocation',routeHandler.getNpcsHandler)

        api.get('/npcs/getOne/:targetNpc', routeHandler.getNpcHandler)

        api.get('/locations/:targetLocation', routeHandler.getLocationHandler)

        api.get('/missions/missionsList/:targetLocation', routeHandler.getMissionsHandler)

        api.patch('/locations/:targetLocation', jsonBodyParser, routeHandler.saveLocationHandler)

        api.patch('/campaigns/:targetCampaign', jsonBodyParser, routeHandler.saveCampaignHandler)
        
        api.patch('/mission/:targetMission', jsonBodyParser, routeHandler.changeTaskStatusHandler )

        api.delete('/campaign/delete/:targetCampaign', routeHandler.deleteCampaignHandler)

        api.listen(PORT,() => console.log(`API running on PORT ${PORT}`))
    })
    .catch(error => console.error(error))