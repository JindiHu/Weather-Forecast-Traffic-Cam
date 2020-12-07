import React from 'react';
import PropTypes from 'prop-types';

const FlatList = () => {
	return <div className="row"></div>;
};

FlatList.defaultProps = {
	data: [],
	renderItem: ({ item }) => {}
};

FlatList.propTypes = {
	data: PropTypes.array.isRequired,
	renderItem: PropTypes.func.isRequired
};

export default FlatList;
