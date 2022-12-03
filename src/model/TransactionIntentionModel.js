import mongoose from 'mongoose';

export const TransactionIntentionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    criptoActive: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CriptoActive',
        required: true,
    },
    nominalValue: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    operation: {
        type: String,
        enum: ['COMPRA', 'VENTA'],
        required: true,
    },
});