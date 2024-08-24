import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { expect } from 'chai'
import { Types } from 'mongoose'
import { User,Campaign, Location } from '../data/models/index.js'
import saveLocation from './saveLocation.js'
import { ContentError, MatchError, NotFoundError } from 'com/errors.js'

const { MONGODB_URL_TEST } = process.env
const { ObjectId } = Types

debugger

describe('save Location',() => {
    before(() => mongoose.connect(MONGODB_URL_TEST)
        .then(() => Promise.all([Location.deleteMany(), User.deleteMany(), Campaign.deleteMany()]))
    )

    beforeEach(() => Promise.all([Location.deleteMany(), User.deleteMany(), Campaign.deleteMany()])
    )

    it('should successfully edit the location',() => {
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'master', password: hash })
                .then(user => Campaign.create({author:user.id})
                    .then(campaign => {
                        Location.create({author: user.Id})
                            .then(locationToEdit => {
                                const locationData = {
                                    name: "Mysterious Forest",
                                    enemies: ["Goblin", "Troll"],
                                    objects: ["Ancient Sword", "Mystic Potion"],
                                    description: "A dark and dense forest filled with unknown dangers and hidden treasures.",
                                    nextLocations: [new ObjectId.toString(), new ObjectId.toString()]
                                }
                                return saveLocation(locationToEdit.id, locationData)
                                    .then(location => {
                                        expect(location).to.exist
                                        expect(location.author).to.equal(user.Id)
                                        expect(location.name).to.equal(locationData.name)
                                        expect(location.enemies).to.equal(locationData.enemies)
                                        expect(location.objects).to.equal(locationData.objects)
                                        expect(location.description).to.equal(locationData.description)
                                        expect(location.nextLocations).to.equal(locationData.nextLocations)
                                        
                                    })
                            })
                        
                        
                    })    
                )
            )
    })

    it('fails on non-exsisting location ',() => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'master', password: hash })
                .then(user => Campaign.create({author:user.id})
                    .then(campaign => {
                        Location.create({author: user.Id})
                            .then(locationToEdit => {
                                const locationData = {
                                    name: "Mysterious Forest",
                                    enemies: ["Goblin", "Troll"],
                                    objects: ["Ancient Sword", "Mystic Potion"],
                                    description: "A dark and dense forest filled with unknown dangers and hidden treasures.",
                                    nextLocations: [new ObjectId.toString(), new ObjectId.toString()]
                                }
                                return saveLocation(new ObjectId.toString(), locationData)
                                    .catch(error => {errorThrown = error})
                                    .finally(() => {
                                        expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                                        expect(errorThrown.message).to.equal('location not found')
                                    })
                            })
                        
                        
                    })    
                )
            )
    })

    it('fails on invalid locationId ',() => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'master', password: hash })
                .then(user => Campaign.create({author:user.id})
                    .then(campaign => {
                        Location.create({author: user.Id})
                            .then(locationToEdit => {
                                const locationData = {
                                    name: "Mysterious Forest",
                                    enemies: ["Goblin", "Troll"],
                                    objects: ["Ancient Sword", "Mystic Potion"],
                                    description: "A dark and dense forest filled with unknown dangers and hidden treasures.",
                                    nextLocations: [new ObjectId.toString(), new ObjectId.toString()]
                                }
                                try{
                                    saveLocation(12343, locationData)
                                }
                                catch(error){
                                    errorThrown = error
                                }
                                finally{
                                        expect(errorThrown).to.be.an.instanceOf(NotFoundError)
                                        expect(errorThrown.message).to.equal('location not found')
                                    }
                            })
                        
                        
                    })    
                )
            )
    })


    it('fails on invalid data',() => {
        let errorThrown
        return bcrypt.hash('123123123', 8)
            .then(hash => User.create({name: 'John', surname: 'Doe', email: 'john@doe.com', username: 'johndoe', role: 'master', password: hash })
                .then(user => Campaign.create({author:user.id})
                    .then(campaign => {
                        Location.create({author: user.Id})
                            .then(locationToEdit => {
                                const locationData = {
                                    name: 12343,
                                    enemies: ["Goblin", "Troll"],
                                    objects: ["Ancient Sword", "Mystic Potion"],
                                    description: "A dark and dense forest filled with unknown dangers and hidden treasures.",
                                    nextLocations: [new ObjectId.toString(), new ObjectId.toString()]
                                }
                                try{
                                    saveLocation(user.id, locationData)
                                }
                                catch(error){
                                    errorThrown = error
                                }
                                finally{
                                        expect(errorThrown).to.be.an.instanceOf(ContentError)
                                    }
                            })
                        
                        
                    })    
                )
            )
    })

    after(() => Promise.all([User.deleteMany(), Campaign.deleteMany(), Location.deleteMany()]).then(() => mongoose.disconnect))
})