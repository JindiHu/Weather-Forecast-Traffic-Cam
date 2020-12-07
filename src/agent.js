import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
	baseURL: config.apiEndpoints.baseUrl
});

const TrafficImages = {
	byDateTime: axiosInstance.get(config.apiEndpoints.url.trafficImages)
};

// const We

const agent = { TrafficImages };

export default agent;
