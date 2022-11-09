import { CriptoActiveServiceRepository } from "../repositories/CriptoActiveServiceRepository.js";

class CriptoActiveService {
    caRepository = new CriptoActiveServiceRepository();

    getAllCriptoActives() {
        return this.caRepository.getAllCriptoActives();
    }

    getAllCriptoActivesWithHistorical() {
        return this.caRepository.getAllCriptoActivesWithHistorical();
    }

    getCriptoActiveBySymbol(symbol) {
        return this.caRepository.getCriptoActiveBySymbol(symbol);
    }

    getCriptoActiveBySymbolWithHistorical(symbol) {
        return this.caRepository.getCriptoActiveBySymbolWithHistorical(symbol);
    }

    async createCriptoActive(criptoActive) {
        const newCriptoActive = {
            symbol: criptoActive.symbol,
            price: criptoActive.price,
            hystrorical: [],
        }
        return await this.caRepository.createCriptoActive(newCriptoActive);
    }

    updateCriptoActive(id, criptoActive) {
        const newCriptoActive = {
            symbol: criptoActive.symbol,
            price: criptoActive.price,
            hystrorical: criptoActive.hystrorical,
            updatetime: criptoActive.updatetime,
        }
        return this.caRepository.CriptoActive(id, newCriptoActive);
    }

    deleteCriptoActive(id) {
        return this.caRepository.deleteCriptoActive(id);
    }
}

export default new CriptoActiveService();