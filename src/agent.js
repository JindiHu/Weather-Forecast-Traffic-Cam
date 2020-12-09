import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
	baseURL: config.apiEndpoints.baseUrl
});

const TrafficImages = {
	getCameras: (datatime) =>
		axiosInstance.get(config.apiEndpoints.url.trafficImages, {
			params: {
				date_time: datatime
			}
		})
};

const WeatherForecast = {
	getTwoHour: (datatime) =>
		axiosInstance.get(config.apiEndpoints.url.weatherForecast.twoHour, {
			params: {
				date_time: datatime
			}
		}),
	getTwentyFourHour: (datatime) =>
		axiosInstance.get(config.apiEndpoints.url.weatherForecast.twentyFourHour, {
			params: {
				date_time: datatime
			}
		}),
	getFourDay: (datatime) =>
		axiosInstance.get(config.apiEndpoints.url.weatherForecast.fourDay, {
			params: {
				date_time: datatime
			}
		})
};

const agent = { TrafficImages, WeatherForecast };

export default agent;
