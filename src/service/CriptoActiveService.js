import { CriptoActive } from "../model/CriptoActive";

class CriptoActiveService {
    getAllCriptoActives() {
        return CriptoActive.find();
    }

    getCriptoActiveBySymbol(symbol) {
        return CriptoActive.findOne(symbol);
    }

    createCriptoActive(criptoActive) {
        return CriptoActive.create(criptoActive);
    }

    updateCriptoActive(id, criptoActive) {
        return CriptoActive.findByIdAndUpdate(id, criptoActive);
    }

    deleteCriptoActive(id) {
        return CriptoActive.findByIdAndDelete(id);
    }
}

export default new CriptoActiveService();