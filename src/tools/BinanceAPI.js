import axios from 'axios';

axios.defaults.baseURL = 'https://api.binance.com/api/v3';

export const getPrices = async (symbol) => {
    const response = await axios.get(`/ticker/price?symbol=${symbol}`);
    return response.data;
}

