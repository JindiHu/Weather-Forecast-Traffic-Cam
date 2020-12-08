import PropTypes from 'prop-types';

export const isTouchDevice = () => {
	return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
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
