import axios from 'axios';

const url = 'http://localhost:3000/api';

export const ApiService = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    },
});
