import { TransactionRepository } from "../repositories/TransactionRepisitory.js";

class TransactionService {
    tRepository = new TransactionRepository();

    getAllTransactions() {
        return this.tRepository.getAllTransactions();
    }

    getTransactionById(id) {
        return this.tRepository.getTransactionById(id);
    }

    createTransaction(transaction) {
        return this.tRepository.createTransaction(transaction);
    }

    deleteTransaction(id) {
        return this.tRepository.deleteTransaction(id);
    }
}

export default new TransactionService();