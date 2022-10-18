import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    addres: String,
    password: String,
    cvu: String,
    wallet: String,
});

export const User = mongoose.model('User', UserSchema);