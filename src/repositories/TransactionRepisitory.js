import mongoose from 'mongoose';
import { TransactionSchema } from '../model/Transaction.js';
import '../config/mongoConf.js';

export class TransactionRepository {
    constructor() {
        this.Transaction = mongoose.model('Transaction', TransactionSchema)
    }

    getAllTransactions() {
        return this.Transaction.find()
            .populate('buyer', '-password -__v')
            .populate('seller', '-password -__v')
            .populate('criptoActive', '-__v -historical')
            .select('-__v');
    }

    getTransactionById(id) {
        return this.Transaction.findById(id)
            .populate('buyer', '-password -__v')
            .populate('seller', '-password -__v')
            .populate('criptoActive', '-__v -historical')
            .select('-__v');
    }

    createTransaction(transaction) {
        return this.Transaction.create(transaction);
    }

    deleteTransaction(id) {
        return this.Transaction.findByIdAndDelete(id).select('-__v');
    }
}