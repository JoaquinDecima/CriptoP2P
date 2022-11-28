import { TransactionRepository } from "../repositories/TransactionRepisitory.js";
import ChangeState from "../tools/ChangeState.js";
import TransactionIntentionService from "./TransactionIntentionService.js";

class TransactionService {
    tRepository = new TransactionRepository();

    getAllTransactions() {
        return this.tRepository.getAllTransactions();
    }

    getTransactionById(id) {
        return this.tRepository.getTransactionById(id);
    }

    concretTransaction(idIntention, user) {
        TransactionIntentionService.getTransactionIntentionById(idIntention)
            .then(intention => {
                if (!intention) {
                    throw new Error("Intention not found");
                }
                if (intention.user.id === user.id) {
                    throw new Error("You cannot accept your own transaction");
                }
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
                return this.tRepository.concretTransaction(newTransacation);
            })
            .catch(err => {
                throw new Error("Error concret transaction: " + err.message);
            });
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