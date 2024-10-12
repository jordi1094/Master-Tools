import 'dotenv/config'
import mongoose from 'mongoose'
import { expect } from 'chai'
import { Types } from 'mongoose'
import { Mission } from '../data/models/index.js'
import changeTaskStatus from './changeTaskStatus.js'
import { ContentError, NotFoundError, SystemError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types

describe('changeTaskStatus', () => {
    before(() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Mission.deleteMany()]))
    )
    beforeEach(() => Promise.all([Mission.deleteMany()]))

    it('should successfully update task status in the mission', () => {
        const authorId = new ObjectId().toString()

        // Crear misión con una task inicial
        return Mission.create({
            author: authorId,
            title: 'Save the Village',
            background: 'The village is under attack.',
            objective: 'Defend the village from invaders.',
            checkList: [{
                task: 'Scout the area',
                status: false
            }]
        }).then(missionToEdit => {
            const taskModified = {
                task: 'Scout the area',
                status: true
            }

            // Cambiar el estado de la tarea
            return changeTaskStatus(missionToEdit._id.toString(), taskModified)
                .then(updatedMission => {
                    expect(updatedMission).to.exist
                    expect(updatedMission.checkList[0].task).to.equal(taskModified.task)
                    expect(updatedMission.checkList[0].status).to.be.true
                })
        })
    })

    it('fails when mission does not exist', () => {
        let errorThrown
        const taskModified = {
            task: 'Scout the area',
            status: true
        }

        return changeTaskStatus(new ObjectId().toString(), taskModified)
            .catch(error => {
                errorThrown = error
            })
            .finally(() => {
                expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                expect(errorThrown.message).to.equal('missions not found')
            })
    })

    it('fails on incorrect task data', () => {
        let errorThrown
        const invalidTaskModified = {
            task: 'Scout the area',
            status: 'notABoolean'  // Status inválido
        }

        return Mission.create({
            author: new ObjectId().toString(),
            title: 'Defend the Castle',
            background: 'The castle is under siege.',
            objective: 'Protect the king.',
            checkList: [{
                task: 'Repair the walls',
                status: false
            }]
        }).then(missionToEdit => {
            try {
                return changeTaskStatus(missionToEdit._id.toString(), invalidTaskModified)
            } catch (error) {
                errorThrown = error
            } finally {
                expect(errorThrown).to.be.an.instanceOf(ContentError)
                expect(errorThrown.message).to.include('Invalid task data')
            }
        })
    })

    after(() => {Mission.deleteMany().then(mongoose.disconnect())})
})
