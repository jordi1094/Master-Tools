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


describe('createMision', () => {
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
                        checkList: [
                            { task: "Gather supplies", status: true },
                            { task: "Find a map of the dragon's lair", status: false },
                            { task: "Prepare the rescue team", status: true },
                            { task: "Set out at dawn", status: true }
                        ]
                    }

                    return createMission(userId, testMissionData)
                        .then(mission => {
                            expect(mission).to.exist
                            expect(mission.title).to.equal(testMissionData.title)
                            expect(mission.background).to.equal(testMissionData.background)
                            expect(mission.objective).to.equal(testMissionData.objective)
                            expect(mission.startLocation.toString()).to.equal(testMissionData.startLocation)
                    })

                })  
    })

    it('fails on non-exsisting user', () => {
        let errorThrown
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
                            {task:"Gather supplies" ,status: true},
                            {task:"Find a map of the dragon's lair", status: false},
                            {task:"Prepare the rescue team", status: true},
                            {task:"Set out at dawn", status: true}
                        ]
                    }

                    return createMission(new ObjectId().toString(), testMissionData)
                    .catch(error => errorThrown = error)
                    .finally(() => {
                        expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                        expect(errorThrown.message).to.equal('user not found')
                    })

                })  
    })
    it('fails on non valid user', () => {
        let errorThrown
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
                            {task:"Gather supplies" ,status: true},
                            {task:"Find a map of the dragon's lair", status: false},
                            {task:"Prepare the rescue team", status: true},
                            {task:"Set out at dawn", status: true}
                        ]
                    }

                    try{
                        return createMission(12234, testMissionData)
                    }catch(error){ 
                        errorThrown = error
                    }finally{
                        expect(errorThrown).to.be.an.instanceOf(ContentError)
                        expect(errorThrown.message).to.equal('userId is not valid')
                    }

                })  
    })
    it('fails on non valid mission data', () => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({ name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'master', password: hash }))
                .then(user => {
                    const userId = user._id.toString()

                    const testMissionData = {
                        title: "Rescue the Princess",
                        background: "The kingdom is in turmoil as the princess has been captured by a dragon. Brave adventurers are needed to save her.",
                        objective: 321423,
                        startLocation: new ObjectId().toString(),
                        checkList:[
                            {task:"Gather supplies" ,status: true},
                            {task:"Find a map of the dragon's lair", status: false},
                            {task:"Prepare the rescue team", status: true},
                            {task:"Set out at dawn", status: true}
                        ]
                    }

                    try{
                        return createMission(12234, testMissionData)
                    }catch(error){ 
                        errorThrown = error
                    }finally{
                        expect(errorThrown).to.be.an.instanceOf(ContentError)
                    }

                })  
    })

    after(() => Promise.all ([Mission.deleteMany(), User.deleteMany()]).then(() => mongoose.disconnect()))
})
