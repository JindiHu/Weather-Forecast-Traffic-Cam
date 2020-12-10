import React from 'react';
import PropTypes from 'prop-types';

const Temperature = ({ low, high, className }) => (
	<div className={className}>
		<div className="d-flex align-items-center">
			<img src="/img/hot.svg" alt="temperature-high" width={30} height={30} />
			<div className="font-weight-bold px-2">{`${high} °C`}</div>
		</div>
		<div className="d-flex mt-3 align-items-center">
			<img src="/img/cold.svg" alt="temperature-low" width={30} height={30} />
			<div className="font-weight-bold px-2">{`${low} °C`}</div>
		</div>
	</div>
);

Temperature.propTypes = {
	low: PropTypes.number.isRequired,
	high: PropTypes.number.isRequired,
	className: PropTypes.string
};

export default Temperature;
