import bcrypt from 'bcrypt';

import { environment } from '../config/enviroment.js';
import { User } from "../model/User.js";
import { validatePassword } from "../tools/Validators.js";

class UserService {
  salt = bcrypt.genSaltSync(environment.HASH_SALT);

  getAllUsers() {
    return User.find();
  }

  getUserById(id) {
    return User.findById(id);
  }

  async createUser(user) {
    const actualPass = user.password;
    validatePassword(actualPass);
    user.password = await bcrypt.hash(actualPass, this.salt);
    return await User.create(user);
  }

  async authUser(email, password) {
    const user = await User.findOne({ email });
    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        return user;
      }
    }
    throw new Error("Invalid credentials");
  }
}

export default new UserService();