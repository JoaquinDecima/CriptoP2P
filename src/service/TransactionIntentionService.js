import { TransactionIntentionRepository } from "../repositories/TransactionIntentionRepository.js";
import CriptoActiveService from "./CriptoActiveService.js";
import { validateOperation } from "../tools/Validators.js";

class TransactionIntentionService {
    tiRepository = new TransactionIntentionRepository();

    getAllTransactionIntentions() {
        return (this.tiRepository.getAllTransactionIntentions());
    }

    getTransactionIntentionById(id) {
        return (this.tiRepository.getTransactionIntentionById(id));
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
        return this.tiRepository.createTransactionIntention(newTransactionIntention);
    }

    async deleteTransactionIntentionById(id, user) {
        const transactionIntention = await this.getTransactionIntentionById(id);
        if (transactionIntention.user._id.toString() === user._id.toString()) {
            return this.tiRepository.deleteTransactionIntention(id);
        }
        throw new Error("Cannot delete transactionIntention from another user");
    }

}

export default new TransactionIntentionService();