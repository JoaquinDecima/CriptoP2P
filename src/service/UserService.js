import bcrypt from 'bcrypt';

import { environment } from '../config/enviroment.js';
import { User } from "../model/User.js";
import { 
  validateAddress,
  validateCvu,
  validateEmail,
  validateLastName,
  validateName,
  validatePassword,
  validateWallet,
} from "../tools/Validators.js";

class UserService {
  salt = bcrypt.genSaltSync(environment.HASH_SALT);

  getAllUsers() {
    return User.find().select('-password -__v');
  }

  getUserById(id) {
    return User.findById(id).select('-password -__v');
  }

  async createUser(user) {
    const newUser = {
      name: validateName(user.name),
      lastname: validateLastName(user.lastname),
      email: validateEmail(user.email),
      address: validateAddress(user.address),
      password: await bcrypt.hash(validatePassword(user.password), this.salt),
      cvu: validateCvu(user.cvu),
      wallet: validateWallet(user.wallet),
    }
    return await User.create(newUser);
  }

  async authUser(email, password) {
    const user = await User.findOne({ email: validateEmail(email) });
    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        return user;
      }
    }
    throw new Error("Invalid credentials");
  }

  deleteUser(id) {
    return User.findByIdAndDelete(id).select('-password -__v');
  }
}

export default new UserService();