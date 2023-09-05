import axios from 'axios';

export const axiosCEP = axios.create({
  baseURL: process.env.CEP_URL,
});

export const axiosConnection = axios.create({
  baseURL: process.env.API_GATEWAY_URL,
});

export const ipApi = axios.create({
  baseURL: 'https://freeipapi.com/api/json',
  headers: {
    'accept-encoding': '*',
  },
});
