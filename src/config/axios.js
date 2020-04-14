import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rectifier-backend.herokuapp.com/',
});

export default instance;