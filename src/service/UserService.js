import { User } from "../model/User.js";

class UserService {
  getAllUsers() {
    return User.find();
  }
}

export default new UserService();