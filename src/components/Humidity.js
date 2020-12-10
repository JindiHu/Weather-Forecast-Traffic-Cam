import React from 'react';
import PropTypes from 'prop-types';

const Humidity = ({ low, high, className }) => (
	<div className={className}>
		<div className="d-flex align-items-center">
			<img src="/img/humidity.svg" alt="humidity" width={30} height={30} />
			<div className="font-weight-bold px-2">{`${low}% - ${high}%`}</div>
		</div>
	</div>
);

Humidity.propTypes = {
	low: PropTypes.number.isRequired,
	high: PropTypes.number.isRequired,
	className: PropTypes.string
};

export default Humidity;
