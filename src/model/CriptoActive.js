import mongoose from 'mongoose';

export const CriptoActiveSchema = new mongoose.Schema({
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
    historical: {
        type: Array,
        required: true,
    },
    updatetime: {
        type: Date,
        default: Date.now,
    },
});