import registerUserHandler from './registerUserHandler.js'
import authenticateUserHandler from './authenticateUserHandler.js' //
import createCampaignHandler from './createCampaignHandler.js'
import createCharacterHandler from './createCharacterHandler.js'
import createLocationHandler from './createLocationHandler.js'
import createMissionHandler from './createMissionHandler.js'
import createNpcHandler from './createNpcHandler.js'
import getCampaignHandler from './getCampaignHandler.js'
import getCampaigsnHandler from './getCampaignsHandler.js'
import getCharacterHandler from './getCharacterHandler.js'
import getCharactersHandler from './getCharactersHandler.js'
import getLocationHandler from './getLocationHandler.js'
import getLocationsHandler from './getLocationsHandler.js'
import getNpcHandler from './getNpcHandler.js'
import getNpcsHandler from './getNpcsHandler.js'
import saveCampaignHandler from './saveCampaignHandler.js'
import saveLocationHandler from './saveLocationHandler.js'


const routeHandler = {
    registerUserHandler,
    authenticateUserHandler,
    createCampaignHandler,
    createCharacterHandler,
    createLocationHandler,
    createMissionHandler,
    createNpcHandler,
    getCampaignHandler,
    getCampaigsnHandler,
    getCharacterHandler,
    getCharactersHandler,
    getLocationHandler,
    getLocationsHandler,
    getNpcHandler,
    getNpcsHandler,
    saveCampaignHandler,
    saveLocationHandler
}

export default routeHandler