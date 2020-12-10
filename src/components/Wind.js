import React from 'react';
import PropTypes from 'prop-types';

const Wind = ({ direction, speed: { low, high }, className }) => (
	<div className={className}>
		<div className="d-flex mt-3 align-items-center">
			<img src="/img/wind.svg" alt="wind" width={30} height={30} />
			<div className="font-weight-bold px-2">{`${direction} ${low} - ${high} km/h`}</div>
		</div>
	</div>
);

Wind.propTypes = {
	direction: PropTypes.string.isRequired,
	speed: PropTypes.shape({
		low: PropTypes.number.isRequired,
		high: PropTypes.number.isRequired
	}),
	className: PropTypes.string
};

export default Wind;
