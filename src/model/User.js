import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 30,
    },
    lastname: {
        type: String,
        required: true,
        min: 3,
        max: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
            },
            message: props => `${props.value} is not a email valid!`
        },
    },
    address: {
        type: String,
        required: true,
        min: 10,
        max: 30,
    },
    password: String,
    cvu: {
        type: String,
        required: true,
        min: 22,
        max: 22,
    },
    wallet: {
        type: String,
        required: true,
        unique: true,
        min: 8,
        max: 8,
    },
});

export const User = mongoose.model('User', UserSchema);