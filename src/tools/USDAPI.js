import axios from 'axios';

const baseURL = 'https://api-dolar-argentina.herokuapp.com';

export const getValue = async () => {
    const response = await axios.get(`${baseURL}/api/dolaroficial/`);
    return response.data;
}
