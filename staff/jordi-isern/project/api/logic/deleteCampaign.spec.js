import mongoose from 'mongoose'
import { expect } from 'chai'
import { Types } from 'mongoose'
import { Campaign } from '../data/models/index.js'
import deleteCampaign from './deleteCampaign.js'
import { ContentError, NotFoundError } from 'com/errors.js'

const { ObjectId } = Types
const { MONGODB_URL_TEST } = process.env

debugger

describe('deleteCampaign', () => {
    before(() => mongoose.connect(MONGODB_URL_TEST).then(() => Campaign.deleteMany()))

    beforeEach(() => Campaign.deleteMany())

    it('success on campaign deleted', () => {
        const campaignId = new ObjectId().toString()
        const mockCampaign = {
            _id: campaignId,
            author: new ObjectId(),
            title: 'Test Campaign',
            background: 'Test Background',
            objective: 'Test Objective',
            startLocation: new ObjectId(),
            image: 'test-image.jpg',
        }

        return Campaign.create(mockCampaign)
            .then(() => deleteCampaign(campaignId))
            .then(result => {
                expect(result).to.be.undefined

                return Campaign.findById(campaignId)
            })
            .then(campaign => {
                expect(campaign).to.be.null 
            })
    })

    it('fails on campaign not found', () => {
        const nonExistentId = new ObjectId().toString()
        let errorThrown

        return deleteCampaign(nonExistentId)
            .catch(error => {
                errorThrown = error
            })
            .finally(() => {
                expect(errorThrown).to.be.instanceOf(NotFoundError)
                expect(errorThrown.message).to.equal('Campaign not found')
            })
    })

    it('fails on invalid campaignId', () => {
        let errorThrown

        try {
            deleteCampaign(432)
        } catch (error) {
            errorThrown = error
        } finally {
            expect(errorThrown).to.be.instanceOf(ContentError)
            expect(errorThrown.message).to.equal('campaignId is not valid')
        }
    })

    after(() => Campaign.deleteMany().then(() => mongoose.disconnect()))
})
