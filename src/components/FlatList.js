import React from 'react';
import PropTypes from 'prop-types';

const FlatList = ({ className, data, renderItem, keyExtractor }) => {
	return (
		<div className={className}>
			{data.map((item) => {
				return <React.Fragment key={keyExtractor(item)}>{renderItem({ item })}</React.Fragment>;
			})}
		</div>
	);
};

FlatList.defaultProps = {
	className: '',
	data: []
};

FlatList.propTypes = {
	data: PropTypes.array.isRequired,
	renderItem: PropTypes.func.isRequired,
	keyExtractor: PropTypes.func.isRequired
};

export default FlatList;
