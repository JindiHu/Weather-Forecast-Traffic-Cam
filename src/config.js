const config = {
	apiEndpoints: {
		baseUrl: 'https://api.data.gov.sg/v1',
		url: {
			trafficImages: '/transport/traffic-images',
			weatherForecast: {
				twoHour: '/environment/2-hour-weather-forecast',
				twentyFourHour: '/environment/24-hour-weather-forecast',
				fourDay: '/environment/4-day-weather-forecast'
			}
		}
	}
};

export default config;
