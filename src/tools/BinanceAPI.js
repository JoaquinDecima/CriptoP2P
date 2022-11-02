import axios from 'axios';

const baseURL =  'https://api.binance.com/api/v3';

export const getPrices = async (symbol) => {
    const response = await axios.get(`${baseURL}/ticker/price?symbol=${symbol}`);
    return response.data;
}

