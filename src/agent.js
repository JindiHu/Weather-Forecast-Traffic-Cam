import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
	baseURL: config.apiEndpoints.baseUrl
});

const TrafficImages = {
	getByDateTime: axiosInstance.get(config.apiEndpoints.url.trafficImages)
};
const WeatherForecase = {
	getTwoHour: axiosInstance.get(config.apiEndpoints.url.weatherForecast.twoHour),
	getTwentyFourHour: axiosInstance.get(config.apiEndpoints.url.weatherForecast.twentyFourHour),
	getFourDay: axiosInstance.get(config.apiEndpoints.url.weatherForecast.fourDay)
};

const agent = { TrafficImages, WeatherForecase };

export default agent;
