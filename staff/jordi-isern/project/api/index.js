import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import jwt from './util/jasonwebtoken-promised.js'

import routeHandler from './handlers/index.js'

import getElfRace from './dndApi/index.js'

const { MONGODB_URL, PORT} = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        const { JsonWebTokenError, TokenExpiredError } = jwt

        const api = express()

        api.use(cors())

        api.get('/', (req, res) => res.send('Hello, World!'))

        const jsonBodyParser = express.json({ strict: true, type: 'application/json' })

        api.post('/users', jsonBodyParser, routeHandler.registerUserHandler)

        api.post('/users/auth', jsonBodyParser, routeHandler.authenticateUserHandler)

        // api.get('/test', (req, res) => getElfRace().then(race => {res.send(race)}))

        api.listen(PORT,() => console.log(`API running on PORT ${PORT}`))
    })
    .catch(error => console.error(error))