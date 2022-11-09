import mongoose from 'mongoose';
import { UserSchema } from '../model/User.js';
import '../config/mongoConf.js';


export class UserRepository {
    constructor() {
        this.User = mongoose.model('User', UserSchema)
    }

    getAllUsers() {
        return this.User.find().select('-password -__v');
    }

    getUserById(id) {
        return this.User.findById(id).select('-password -__v');
    }

    getUserByEmail(email) {
        return this.User.findOne({ email }).select('-__v');
    }

    createUser(user) {
        return this.User.create(user);
    }

    deleteUser(id) {
        return this.User.findByIdAndDelete(id).select('-password -__v');
    }
}