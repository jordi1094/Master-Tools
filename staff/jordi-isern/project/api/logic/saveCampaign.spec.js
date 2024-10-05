import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { expect } from 'chai'
import { Types } from 'mongoose'
import { User,Campaign} from '../data/models/index.js'
import saveCampaign from './saveCampaign.js'
import { ContentError, MatchError, NotFoundError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types

describe('saveCampaing', () => {
    before (() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Campaign.deleteMany()]))
    )
    beforeEach(() => Promise.all([Campaign.deleteMany()]))

    it('should successfully edit the campaing', () => {
        const authorId = new ObjectId().toString()
        return Campaign.create ({author: authorId})
                    .then(campaignToEdit => {
                        const newCampaignData = {
                            title: "Rescue the Princess",
                            background: "The kingdom is in turmoil as the princess has been captured by a dragon.",
                            objective: "Infiltrate the dragon's lair and rescue the princess without being detected.",
                            image: "https://example.com/image.png" 
                        }
                        return saveCampaign(campaignToEdit._id.toString(), newCampaignData)
                            .then(campaign => {
                                expect(campaign).to.exist
                                expect(campaign.author.toString()).to.equal(campaignToEdit.author.toString())
                                expect(campaign.title).to.equal(newCampaignData.title)
                                expect(campaign.background).to.equal(newCampaignData.background)
                                expect(campaign.objective).to.equal(newCampaignData.objective)
                            })
                    })
    })

    it('fails on non-exssisting campaign', () => {
            let errorThrown
                return (user => Campaign.create ({author: user._id.toString()})
                    .then(campaignToEdit => {
                        const newCampaignData = {
                            title: "Rescue the Princess",
                            background: "The kingdom is in turmoil as the princess has been captured by a dragon.",
                            objective: "Infiltrate the dragon's lair and rescue the princess without being detected.",
                            startLocation: new Types.ObjectId().toString(),
                            image: "https://example.com/image.png" 
                        }
                        return saveCampaign(new ObjectId().toString(), newCampaignData)
                            .catch(error => {errorThrown = error})
                            .finally(() => {
                                expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                                expect(errorThrown.message).to.equal('location not found')
                            })
                    })
                )    
    })

    it('fails on incorrect new campaign data', () => {
        let errorThrown
        const newCampaignData = {
            title: "Rescue the Princess",
            background: "The kingdom is in turmoil as the princess has been captured by a dragon.",
            objective: "Infiltrate the dragon's lair and rescue the princess without being detected.",
            startLocation: 43215423,
            image: "https://example.com/image.png"
        }
        return Campaign.create({ author: new ObjectId().toString() })
            .then(campaignToEdit => {
                try{ saveCampaign(campaignToEdit._id.toString(), newCampaignData)
                }catch(error) {
                        errorThrown = error
                }finally{
                    expect(errorThrown).to.be.an.instanceOf(ContentError)
                }
                
            })
    })

    after(() => Campaign.deleteMany())
})