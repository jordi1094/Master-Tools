import { User } from "../data/models/index.js";
import { DuplicityError, SystemError } from "com/errors.js";
import validate from "com/validate.js";
import bcrypt from 'bcryptjs'

const registerUser = ( name, surname, email, username, role, password, passwordRepeat) => {
  validate.name(name, "name");
  validate.name(surname, "surname");
  validate.email(email);
  validate.username(username);
  validate.password(password);
  validate.passwordMatch(password, passwordRepeat);
  // TODO validate Rol

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
            .then(() => { })
        })
    })
}

export default registerUser
