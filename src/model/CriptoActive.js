import mongoose from 'mongoose';

const CriptoActiveSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 30,
    },
    price: {
        type: Number,
        required: true,
    },
    hystrorical: {
        type: Array,
        required: true,
    },
    updatetime: {
        type: Date,
        default: Date.now,
    },
});

export const CriptoActive = mongoose.model('CriptoActive', CriptoActiveSchema);