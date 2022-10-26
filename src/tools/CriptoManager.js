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

    updateCryptoData() {
        CriptoActiveService.getAllCriptoActives()
            .then(criptoActive => {
                criptoActive.forEach(async(crypto) => {
                    const price = await getPrices(crypto.symbol);
                    const oldprice = {
                        price: crypto.price,
                        date: crypto.updatetime,
                    };
                    crypto.hystrorical.push(oldprice)
                    crypto.price = price.price;
                    crypto.updatetime = Date.now();
                    crypto.save();
                });
            })
            .catch(err => {
                console.error(err);
            });
    }
}

export default new CriptoManager();