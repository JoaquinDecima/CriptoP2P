import bcrypt from 'bcrypt';

import { environment } from '../config/enviroment.js';
import { UserRepository } from '../repositories/UserRepository.js';
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
  userRepository = new UserRepository();

  getAllUsers() {
    return this.userRepository.getAllUsers();
  }

  getUserById(id) {
    return this.userRepository.getUserById(id);
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
    return await this.userRepository.createUser(newUser);
  }

  async authUser(email, password) {
    const user = await this.userRepository.getUserByEmail(validateEmail(email));
    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        return user;
      }
    }
    throw new Error("Invalid credentials");
  }

  deleteUser(id) {
    return this.deleteUser(id);
  }
}

export default new UserService();