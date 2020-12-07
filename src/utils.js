import PropTypes from 'prop-types';

export const isTouchDevice = () => {
	return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
};

export const reverseGeocoding = ({ unknownGeocode, geoLocations }) => {
	let shortest = null;
	let nearestLocation = null;
	geoLocations.forEach((item, key) => {
		const { label_location } = item;
		const dLat = Math.pow(label_location.latitude - unknownGeocode.latitude, 2);
		const dLong = Math.pow(label_location.longitude - unknownGeocode.longitude, 2);
		if (shortest !== null) {
			if (dLat + dLong < shortest) {
				shortest = dLat + dLong;
				nearestLocation = { ...item, key };
			}
		} else {
			shortest = dLat + dLong;
			nearestLocation = { ...item, key };
		}
	});
	return nearestLocation;
};

reverseGeocoding.propTypes = {
	unknownGeocode: PropTypes.shape({
		latitude: PropTypes.number,
		longitude: PropTypes.number
	}).isRequired,
	geoLocations: PropTypes.array.isRequired
};
