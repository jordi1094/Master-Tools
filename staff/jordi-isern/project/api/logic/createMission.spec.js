import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { expect } from 'chai'
import { Types } from 'mongoose'
import { Mission, User} from '../data/models/index.js'
import createMission from './createMission.js'
import { ContentError, NotFoundError } from 'com/errors.js'
import { campaign } from '../data/models/Campaign.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types

debugger

describe.only('createMision', () => {
    before(() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Mission.deleteMany(), User.deleteMany()]))
    )
    beforeEach(() => Promise.all([Mission.deleteMany(), User.deleteMany()]))

    it('should successfully create a Mision', () => {
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({ name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'master', password: hash }))
                .then(user => {
                    const userId = user._id.toString()

                    const testMissionData = {
                        title: "Rescue the Princess",
                        background: "The kingdom is in turmoil as the princess has been captured by a dragon. Brave adventurers are needed to save her.",
                        objective: "Infiltrate the dragon's lair and rescue the princess without being detected.",
                        startLocation: new ObjectId().toString(),
                        checkList:[
                            "Gather supplies",
                            "Find a map of the dragon's lair",
                            "Prepare the rescue team",
                            "Set out at dawn"
                        ]
                    }

                    return createMission(userId, testMissionData)
                        .then(mision => {
                            expect(mision).to.exist
                            expect(mision.title).to.equal(testMissionData.title)
                            expect(mision.background).to.equal(testMissionData.background)
                            expect(mision.objective).to.equal(testMissionData.objective)
                            expect(mision.startLocation).to.equal(testMissionData.startLocation)
                            expect(mision.checkList).to.deep.equal(testMissionData.checkList)
                            
                        })

                })
    })
})