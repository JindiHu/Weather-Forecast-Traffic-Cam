import PropTypes from 'prop-types';

export const isTouchDevice = () => {
	return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
};

export const getWeatherIconPath = (weather) => {
	weather = weather.toLowerCase();
	const iconPath = '/img/';
	const weatherIconDic = [
		{ weather: 'fair', icon: 'sunny.svg' },
		{ weather: 'partly cloudy', icon: 'partly-cloudy.svg' },
		{ weather: 'cloudy', icon: 'cloudy.svg' },
		{ weather: 'thundery showers', icon: 'storm.svg' },
		{ weather: 'showers', icon: 'shower-rain.svg' },
		{ weather: 'light rain', icon: 'light-rain.svg' },
		{ weather: 'rain', icon: 'rain.svg' },
		{ weather: 'hazy', icon: 'hazy.svg' },
		{ weather: 'mist', icon: 'mist.svg' },
		{ weather: 'windy', icon: 'windy.svg' }
	];
	for (let i = 0; i < weatherIconDic.length; i++) {
		if (weather.match(`${weatherIconDic[i].weather}`)) {
			return iconPath + weatherIconDic[i].icon;
		}
	}
	return;
};
getWeatherIconPath.propTypes = {
	weather: PropTypes.string
};

export const getDistance = (p1, p2) => {
	return Math.sqrt(Math.pow(p1.latitude - p2.latitude, 2) + Math.pow(p1.longitude - p2.longitude, 2));
};

getDistance.propTypes = {
	p1: PropTypes.shape({
		latitude: PropTypes.number,
		longitude: PropTypes.number
	}),
	p2: PropTypes.shape({
		latitude: PropTypes.number,
		longitude: PropTypes.number
	})
};
