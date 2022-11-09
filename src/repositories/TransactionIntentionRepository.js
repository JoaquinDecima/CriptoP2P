import mongoose from 'mongoose';
import { TransactionIntentionSchema } from '../model/TransactionIntention.js';
import '../config/mongoConf.js';

export class TransactionIntentionRepository {
    constructor() {
        this.TransactionIntention = mongoose.model('TransactionIntention', TransactionIntentionSchema)
    }

    getAllTransactionIntentions() {
        return this.TransactionIntention.find()
            .populate('user', '-password -__v')
            .populate('criptoActive', '-__v -historical')
            .select('-__v');
    }

    getTransactionIntentionById(id) {
        return this.TransactionIntention.findById(id)
            .populate('user', '-password -__v')
            .populate('criptoActive', '-__v -historical')
            .select('-__v');
    }

    createTransactionIntention(transactionIntention) {
        return this.TransactionIntention.create(transactionIntention);
    }

    deleteTransactionIntention(id) {
        return this.TransactionIntention.findByIdAndDelete(id).select('-__v');
    }
}