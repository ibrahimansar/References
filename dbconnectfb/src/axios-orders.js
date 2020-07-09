import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reference-55a2a.firebaseio.com/'
})

export default instance;