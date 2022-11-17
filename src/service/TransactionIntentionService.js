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
        if (this.calculatePorcentage(criptoActive.price, transactionIntention.nominalValue) > 5) {
            throw new Error("El valor nominal no puede ser mayor al 5% del precio actual");
        }

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

    calculatePorcentage(criptoPrice, intentionPrice) {
        let diferencia = criptoPrice - intentionPrice;
        if (diferencia < 0) {
            diferencia = diferencia * -1;
        }
        return ((diferencia) / intentionPrice) * 100;
    }

}

export default new TransactionIntentionService();