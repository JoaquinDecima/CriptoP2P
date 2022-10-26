import { createRequire } from "module";
const require = createRequire(import.meta.url);
import CriptoActiveService from '../service/CriptoActiveService.js';
import { getPrices } from './BinanceAPI.js';

class CriptoManager {

    ingestCryptoData() {
        const cryptoData = require('../data/criptoData.json');
        cryptoData.forEach(async(crypto) => {
            const price = await getPrices(crypto);
            const cryptoModel = {
                symbol: price.symbol,
                price: price.price,
            }
            CriptoActiveService.createCriptoActive(cryptoModel);
        });
    }
}

export default new CriptoManager();