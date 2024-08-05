import registerUserHandler from './registerUserHandler.js'
import authenticateUserHandler from './authenticateUserHandler.js'
import createCampaignHandler from './createCampaignHandler.js'
import createCharacterHandler from './createCharacterHandler.js'
import createLocationHandler from './createLocationHandler.js'
import createMissionHandler from './createMissionHandler.js'
import createNpcHandler from './createNpcHamdler.js'

const routeHandler = {
    registerUserHandler,
    authenticateUserHandler,
    createCampaignHandler,
    createCharacterHandler,
    createLocationHandler,
    createMissionHandler,
    createNpcHandler
}

export default routeHandler