import axios from 'axios';

export const axiosCEP = axios.create({
  baseURL: process.env.CEP_URL,
});

export const axiosConnection = axios.create({
  baseURL:
    process.env.BACK_ENV === 'development'
      ? process.env.API_GATEWAY_LOCAL
      : process.env.API_GATEWAY_URL,
});
