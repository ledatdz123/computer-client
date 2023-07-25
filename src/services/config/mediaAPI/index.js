import axios from 'axios';
import helpers from '@/utils/helpers';

const mediaAPI = axios.create({
    baseURL: `https://server-computer.onrender.com/api/`,
});

mediaAPI.interceptors.request.use(
    (config) => {
        if (helpers.isAuthenticated()) {
            config.headers['Authorization'] = 'Bearer ' + helpers.isAuthenticated();
            config.headers['x-access-token'] = helpers.isAuthenticated();
        }
        config.headers['Content-Type'] = 'multipart/form-data';
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

export default mediaAPI;
