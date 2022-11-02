import { TransactionIntention } from "../model/TransactionIntention.js";

class TransactionIntentionService {

    getAllTransactionIntentions() {
        return TransactionIntention.find();
    }

    getTransactionIntentionById(id) {
        return TransactionIntention.findById(id);
    }

}

export default new TransactionIntentionService();