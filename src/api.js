import axios from 'axios';
import config from './config';

const apiInstance = axios.create({
	baseURL: config.apiEndpoints.baseUrl
});

const api = {
	getTrafficImages: apiInstance.get(config.apiEndpoints.url.trafficImages)
};

export default api;
