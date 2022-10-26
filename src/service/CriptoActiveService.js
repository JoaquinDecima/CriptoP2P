import { CriptoActive } from "../model/CriptoActive.js";

class CriptoActiveService {
    getAllCriptoActives() {
        return CriptoActive.find();
    }

    getCriptoActiveBySymbol(symbol) {
        return CriptoActive.findOne({symbol: symbol});
    }

    async createCriptoActive(criptoActive) {
        const newCriptoActive = {
            symbol: criptoActive.symbol,
            price: criptoActive.price,
            hystrorical: [],
        }
        return await CriptoActive.create(newCriptoActive);
    }

    updateCriptoActive(id, criptoActive) {
        const newCriptoActive = {
            symbol: criptoActive.symbol,
            price: criptoActive.price,
            hystrorical: criptoActive.hystrorical,
            updatetime: criptoActive.updatetime,
        }
        return CriptoActive.findByIdAndUpdate(id, newCriptoActive);
    }

    deleteCriptoActive(id) {
        return CriptoActive.findByIdAndDelete(id);
    }
}

export default new CriptoActiveService();