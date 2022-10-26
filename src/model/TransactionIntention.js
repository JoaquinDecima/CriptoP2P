import mongoose from 'mongoose';

const TransactionIntentionSchema = new mongoose.Schema({
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
    criptoActiveValue: {
        type: Number,
        required: true,
    },
    criptoActiveAmount: {
        type: Number,
        required: true,
    },
    ARSValue: {
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
    type: {
        type: String,
        enum: ['COMPRA', 'VENTA'],
        required: true,
    },
});

export const TransactionIntention = mongoose.model('TransactionIntention', TransactionIntentionSchema);