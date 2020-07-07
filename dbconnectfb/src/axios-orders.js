import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vehicle-garage.firebaseio.com/'
})

export default instance;