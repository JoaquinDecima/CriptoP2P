import mongoose from "mongoose";

export const TransactionSchema = new mongoose.Schema({
    criptoActive: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CriptoActive",
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
    reputation: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["ESPERANDO", "PAGADO", "CONFIRMADO", "CANCELADO"],
        default: "ESPERANDO",
        required: true,
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});