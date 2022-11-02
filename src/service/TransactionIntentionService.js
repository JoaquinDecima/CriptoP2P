import { TransactionIntention } from "../model/TransactionIntention.js";
import CriptoActiveService from "./CriptoActiveService.js";
import { validateOperation } from "../tools/Validators.js";

class TransactionIntentionService {

    getAllTransactionIntentions() {
        return TransactionIntention.find();
    }

    getTransactionIntentionById(id) {
        return TransactionIntention.findById(id);
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