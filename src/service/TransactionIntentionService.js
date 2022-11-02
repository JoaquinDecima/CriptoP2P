import { TransactionIntention } from "../model/TransactionIntention.js";
import CriptoActiveService from "./CriptoActiveService.js";
import UserService from "./UserService.js";
import { validateOperation } from "../tools/Validators.js";

class TransactionIntentionService {

    getAllTransactionIntentions() {
        return TransactionIntention.find();
    }

    getTransactionIntentionById(id) {
        return TransactionIntention.findById(id);
    }

    async createTransactionIntention(transactionIntention, user) {
        const newUser = await UserService.getUserById(user._id);
        const newTransactionIntention = {
            user: newUser,
            criptoActive: CriptoActiveService.getCriptoActiveBySymbol(transactionIntention.criptoActive),
            nominalValue: transactionIntention.nominalValue,
            amount: transactionIntention.amount,
            operation: validateOperation(transactionIntention.operation),
        }
        transactionIntention.user = user;
        return TransactionIntention.create(newTransactionIntention);
    }

}

export default new TransactionIntentionService();