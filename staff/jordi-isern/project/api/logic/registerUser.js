import { User, Campaign, Character } from "../data/models/index.js";
import { DuplicityError, SystemError } from "com/errors.js";
import validate from "com/validate.js";
import bcrypt from 'bcryptjs'
import { campaign } from "../data/models/Campaign.js";
import { Types } from "mongoose";


const registerUser = ( name, surname, email, username, role, password, passwordRepeat) => {
  validate.name(name, "name");
  validate.name(surname, "surname");
  validate.email(email);
  validate.username(username);
  validate.password(password);
  validate.passwordMatch(password, passwordRepeat);
 validate.role(role)

  return User.findOne({ $or: [{ email }, { username }] })
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      if (user) {
        throw new DuplicityError("user already exists");
      }

      bcrypt
        .hash(password, 8)
        .catch((error) => {
          throw new SystemError(error.message);
        })
        .then((hash) => {
          const newUser = {
            name: name,
            surname: surname,
            email: email,
            username: username,
            role: role,
            password: hash
          }

          return User.create(newUser)
            .catch(error => {throw new SystemError(error.message)})
            .then((user) => {
              return Campaign.findById('672cef33fa11f84b5c8da6a1')
                .catch(error => {throw new SystemError(error.message)})
                .then(sampleCampaign => {

                  const newCampaign = new Campaign({
                    author: user._id,
                    title: sampleCampaign.title,
                    background: sampleCampaign.background,
                    objective: sampleCampaign.objective,
                    startLocation: sampleCampaign.startLocation,
                    image: sampleCampaign.image
                  })
                  newCampaign.save()
                  .catch(error => {throw new SystemError(error.message)})
                  .then((campaign) =>{
                    return Character.find({campaing:'672cef33fa11f84b5c8da6a1'})
                      .catch(error => {throw new SystemError(error.message)})
                      .then((sampleCharacters)=> {
                        sampleCharacters.forEach((sampleCharacter) => {
                          const newCharacter = new Character(sampleCharacter)
                          newCharacter.campaing = campaign._id
                          newCharacter.save()
                          .catch(error => {
                            throw new SystemError(error.message)
                          })
                          .then((newCharacterSaved) => {
                            console.log(newCharacterSaved)
                          })
                        })
                      })
                      
                  })
                })
             })
        })
    })
}

export default registerUser
