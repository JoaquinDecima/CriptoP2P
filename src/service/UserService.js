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
}

export default new UserService();