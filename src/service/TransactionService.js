import { TransactionRepository } from "../repositories/TransactionRepisitory.js";
import ChangeState from "../tools/ChangeState.js";
import { validatePorcent } from "../tools/Validators.js";
import TransactionIntentionService from "./TransactionIntentionService.js";

class TransactionService {
    tRepository = new TransactionRepository();

    getAllTransactions() {
        return this.tRepository.getAllTransactions();
    }

    async getAllTransactionsActives() {
        const transactions = await this.getAllTransactions();
        return transactions.filter(transaction => (transaction.status === "ESPERANDO" || transaction.status === "PAGADO"));
    }

    getTransactionById(id) {
        return this.tRepository.getTransactionById(id);
    }

    async concretTransaction(idIntention, user) {
        const intention = await TransactionIntentionService.getTransactionIntentionById(idIntention);

        if (!intention) {
            throw new Error("Intention not found");
        }
        if (intention.user.email == user.email) {
            throw new Error("You cannot accept your own transaction");
        }
        validatePorcent(intention.nominalValue, intention.criptoActive.price);
        const newTransacation = {
            criptoActive: intention.criptoActive,
            nominalValue: intention.nominalValue,
            amount: intention.amount,
            reputation: 0,
        }
        if (intention.operation === "COMPRA") {
            newTransacation.buyer = user;
            newTransacation.seller = intention.user;
        } else {
            newTransacation.buyer = intention.user;
            newTransacation.seller = user;
        }
        return this.tRepository.createTransaction(newTransacation);
    }

    async advanceState(user, transactionID) {
        const transaction = await this.getTransactionById(transactionID);
        ChangeState[transaction.status](user, transaction);
        this.tRepository.createTransaction(transaction);
    }

    async cancelTransaction(user, transactionID) {
        const transaction = await this.getTransactionById(transactionID);
        transaction.status = "CANCELADO";
        transaction.reputation = -20;
        this.tRepository.createTransaction(transaction);
    }
}

export default new TransactionService();