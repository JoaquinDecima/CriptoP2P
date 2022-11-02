import { TransactionIntention } from "../model/TransactionIntention.js";
import CriptoActiveService from "./CriptoActiveService.js";
import { validateOperation } from "../tools/Validators.js";

class TransactionIntentionService {

    getAllTransactionIntentions() {
        return (TransactionIntention
            .find()
            .populate('user', '-password -__v')
            .populate('criptoActive', '-__v -historical'));
    }

    getTransactionIntentionById(id) {
        return (TransactionIntention
            .findById(id)
            .populate('user', '-password -__v')
            .populate('criptoActive', '-__v -historical'))
    }

    async createTransactionIntention(transactionIntention, user) {
        const criptoActive = await CriptoActiveService.getCriptoActiveBySymbol(transactionIntention.criptoActive);
        const newTransactionIntention = {
            user,
            criptoActive,
            nominalValue: transactionIntention.nominalValue,
            amount: transactionIntention.amount,
            operation: validateOperation(transactionIntention.operation),
        };
        return TransactionIntention.create(newTransactionIntention);
    }

}

export default new TransactionIntentionService();