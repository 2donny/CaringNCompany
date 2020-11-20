import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://caring-79b3f.firebaseio.com/'
})

export default instance;