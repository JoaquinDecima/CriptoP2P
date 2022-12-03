import mongoose from 'mongoose';
import { CriptoActiveSchema } from '../model/CriptoActiveModel.js';
import '../config/mongoConf.js';

export class CriptoActiveRepository {
    constructor() {
        this.CriptoActive = mongoose.model('CriptoActive', CriptoActiveSchema)
    }

    getAllCriptoActives() {
        return this.getAllCriptoActivesWithHistorical().select('-historical');
    }

    getAllCriptoActivesWithHistorical() {
        return this.CriptoActive.find().select('-__v');
    }

    getCriptoActiveBySymbol(symbol) {
        return this.getCriptoActiveBySymbolWithHistorical(symbol).select('-historical');
    }

    getCriptoActiveBySymbolWithHistorical(symbol) {
        return this.CriptoActive.findOne({ symbol }).select('-__v');
    }

    createCriptoActive(criptoActive) {
        return this.CriptoActive.create(criptoActive);
    }

    deleteCriptoActive(id) {
        return this.CriptoActive.findByIdAndDelete(id).select('-__v -historical');
    }

    updateCriptoActive(id, criptoActive) {
        return this.CriptoActive.findByIdAndUpdate(id, criptoActive);
    }
}