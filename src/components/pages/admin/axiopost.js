import axios from 'axios';
import _ from 'lodash';

const instance = axios.create({
    baseURL: process.env.SOCKET,
    //withCredentials: true
});

instance.interceptors.response.use(
    (response) => {
        const { data } = response;     
        return data.data;
    }    
 );

export default instance;