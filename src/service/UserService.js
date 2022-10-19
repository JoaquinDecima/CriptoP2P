import { User } from "../model/User";

class UserService {
  getAllUsers() {
    return User.find();
  }
}

export default new UserService();