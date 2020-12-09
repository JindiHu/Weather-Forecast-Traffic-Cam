import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ className }) => {
	return (
		<div className={className}>
			<div className="spinner-border"></div>
		</div>
	);
};

Spinner.defaultProps = {
	className: 'd-flex justify-content-center py-3'
};

Spinner.propTypes = {
	className: PropTypes.string
};

export default Spinner;
