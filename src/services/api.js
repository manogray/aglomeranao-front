import axios from 'axios';

const baseURL = process.env.NODE_ENV == 'development' ?
    'http://localhost:3333' : 'https://aglomeranao-ws.herokuapp.com';

const api = axios.create({
    baseURL: baseURL
});

export default api;
