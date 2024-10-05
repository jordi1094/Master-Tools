import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import { expect } from 'chai'
import { Types } from 'mongoose'
import { Location, Mission, User } from '../data/models/index.js'
import getMissions from './getMissions.js'
import { ContentError, NotFoundError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types

debugger

describe.only('getMissions',() => {
    before(() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Location.deleteMany(), Mission.deleteMany(), User.deleteMany()]))
    )

    beforeEach(() => Promise.all([Location.deleteMany(), Mission.deleteMany(), User.deleteMany()]))

    it('succesfully finds all missions for location selected', () => {
        return bcrypt. hash('123123123', 8)
            .then(hash => User.create({
                name: 'Mac',
                surname: 'Book',
                email: 'mac@book.com',
                username: 'macbook',
                role: 'master',
                password: hash
            }))
            .then(user => {
                const userId = user._id.toString()

                const testLocation = {
                    author: userId,
                    name: "Ancient Ruins",
                    enemies: ["Goblin", "Orc", "Troll"],
                    objects: ["Ancient Sword", "Potion of Healing", "Mysterious Artifact"],
                    description: "An ancient ruin filled with dangerous creatures and hidden treasures.",
                    nextLocations: []
                }
                return Location.create(testLocation)
                    .then(location => {
                        const missionData1 = {
                            author: userId,
                            title: "Exploración del Templo Perdido",
                            background: "Una antigua leyenda habla de un templo oculto en la selva que contiene valiosas reliquias. Tu misión es encontrarlo.",
                            objective: "Llegar al templo y recuperar el artefacto sagrado antes de que lo hagan los cazadores de tesoros.",
                            startLocation:location._id.toString(),
                            checkList: []
                        }
                        const missionData2 = {
                            author: userId,
                            title: "Exploración del Templo Perdido 2",
                            background: "Una antigua leyenda habla de un templo oculto en la selva que contiene valiosas reliquias. Tu misión es encontrarlo 2.",
                            objective: "Llegar al templo y recuperar el artefacto sagrado antes de que lo hagan los cazadores de tesoros 2.",
                            startLocation:location._id.toString(),
                            checkList: []
                        }

                        return Promise.all([
                            Mission.create(missionData1),
                            Mission.create(missionData2)
                        ]).then(([testMission1, testMission2]) => {
                            return getMissions(userId, location._id.toString())
                            .then(missions => {
                                expect(missions.length).to.equal(2)
                                const missionsIds = missions.map(mission => mission.id.toString())
                                expect(missionsIds).to.include(testMission1._id.toString())
                                expect(missionsIds).to.include(testMission2._id.toString())
                            })
                        })
                    })
            })
    })

    it('fails on non-existing user', () => {
        let errorThrown
        return bcrypt.hash('123123123',8)
        .then(hash => User.create({
            name: 'Mac',
            surname: 'Book',
            email: 'mac@book.com',
            username: 'macbook',
            role: 'master',
            password: hash
        }))
        .then(user => {
            const userId = user._id.toString()

            const testLocation = {
                author: userId,
                name: "Ancient Ruins",
                enemies: ["Goblin", "Orc", "Troll"],
                objects: ["Ancient Sword", "Potion of Healing", "Mysterious Artifact"],
                description: "An ancient ruin filled with dangerous creatures and hidden treasures.",
                nextLocations: []
            }
            return Location.create(testLocation)
                .then(location => {
                    const missionData1 = {
                        author: userId,
                        title: "Exploración del Templo Perdido",
                        background: "Una antigua leyenda habla de un templo oculto en la selva que contiene valiosas reliquias. Tu misión es encontrarlo.",
                        objective: "Llegar al templo y recuperar el artefacto sagrado antes de que lo hagan los cazadores de tesoros.",
                        startLocation:location._id.toString(),
                        checkList: []
                    }
                    const missionData2 = {
                        author: userId,
                        title: "Exploración del Templo Perdido 2",
                        background: "Una antigua leyenda habla de un templo oculto en la selva que contiene valiosas reliquias. Tu misión es encontrarlo 2.",
                        objective: "Llegar al templo y recuperar el artefacto sagrado antes de que lo hagan los cazadores de tesoros 2.",
                        startLocation:location._id.toString(),
                        checkList: []
                    }

                    return Promise.all([
                        Mission.create(missionData1),
                        Mission.create(missionData2)
                    ]).then(([testMission1, testMission2]) => {
                        return getMissions(new ObjectId().toString(), location._id.toString())
                        .catch(error => {errorThrown = error})
                        .finally(() => {
                            expect(errorThrown).to.be.an.instanceOf(NotFoundError);
                            expect(errorThrown.message).to.equal('User not found');
                        })
                    })
                })
        })
    })

    it('fails on non-valid locationId', () => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
        .then(hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
        .then(user => {
            const userId = user._id.toString()

            const testLocation = {
                author: userId,
                name: "Ancient Ruins",
                enemies: ["Goblin", "Orc", "Troll"],
                objects: ["Ancient Sword", "Potion of Healing", "Mysterious Artifact"],
                description: "An ancient ruin filled with dangerous creatures and hidden treasures.",
                nextLocations: []
            }
            return Location.create(testLocation)
                .then(location => {
                    const missionData1 = {
                        author: userId,
                        title: "Exploración del Templo Perdido",
                        background: "Una antigua leyenda habla de un templo oculto en la selva que contiene valiosas reliquias. Tu misión es encontrarlo.",
                        objective: "Llegar al templo y recuperar el artefacto sagrado antes de que lo hagan los cazadores de tesoros.",
                        startLocation:location._id.toString(),
                        checkList: []
                    }
                    const missionData2 = {
                        author: userId,
                        title: "Exploración del Templo Perdido 2",
                        background: "Una antigua leyenda habla de un templo oculto en la selva que contiene valiosas reliquias. Tu misión es encontrarlo 2.",
                        objective: "Llegar al templo y recuperar el artefacto sagrado antes de que lo hagan los cazadores de tesoros 2.",
                        startLocation:location._id.toString(),
                        checkList: []
                    }

                    return Promise.all([
                        Mission.create(missionData1),
                        Mission.create(missionData2)
                    ]).then(() => {
                        try{ getMissions(userId, 23432)}
                        catch(error) {
                            errorThrown = error
                        }
                        finally{
                            expect(errorThrown).to.be.an.instanceOf(ContentError);
                            expect(errorThrown.message).to.equal('locationId is not valid')
                        }
                    })
                })
        })
    })
    it('fails on non-valid UserId', () => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
        .then(hash => User.create({name: 'Mac', surname: 'Book', email: 'mac@book.com', username: 'macbook', role: 'master', password: hash }))
        .then(user => {
            const userId = user._id.toString()

            const testLocation = {
                author: userId,
                name: "Ancient Ruins",
                enemies: ["Goblin", "Orc", "Troll"],
                objects: ["Ancient Sword", "Potion of Healing", "Mysterious Artifact"],
                description: "An ancient ruin filled with dangerous creatures and hidden treasures.",
                nextLocations: []
            }
            return Location.create(testLocation)
                .then(location => {
                    const missionData1 = {
                        author: userId,
                        title: "Exploración del Templo Perdido",
                        background: "Una antigua leyenda habla de un templo oculto en la selva que contiene valiosas reliquias. Tu misión es encontrarlo.",
                        objective: "Llegar al templo y recuperar el artefacto sagrado antes de que lo hagan los cazadores de tesoros.",
                        startLocation:location._id.toString(),
                        checkList: []
                    }
                    const missionData2 = {
                        author: userId,
                        title: "Exploración del Templo Perdido 2",
                        background: "Una antigua leyenda habla de un templo oculto en la selva que contiene valiosas reliquias. Tu misión es encontrarlo 2.",
                        objective: "Llegar al templo y recuperar el artefacto sagrado antes de que lo hagan los cazadores de tesoros 2.",
                        startLocation:location._id.toString(),
                        checkList: []
                    }

                    return Promise.all([
                        Mission.create(missionData1),
                        Mission.create(missionData2)
                    ]).then(() => {
                        try{ getMissions(4325, location._id.toString())}
                        catch(error) {
                            errorThrown = error
                        }
                        finally{
                            expect(errorThrown).to.be.an.instanceOf(ContentError);
                            expect(errorThrown.message).to.equal('userId is not valid')
                        }
                    })
                })
        })
    })

    after(() => Promise.all([User.deleteMany(), Location.deleteMany()], Mission.deleteMany()).then(() => mongoose.disconnect()));
})