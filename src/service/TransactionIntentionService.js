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

    async deleteTransactionIntentionById(id, user) {
        const transactionIntention = await this.getTransactionIntentionById(id);
        if (transactionIntention.user._id.toString() === user._id.toString()) {
            return TransactionIntention.findByIdAndDelete(id);
        }
        throw new Error("Cannot delete transactionIntention from another user");
    }

}

export default new TransactionIntentionService();