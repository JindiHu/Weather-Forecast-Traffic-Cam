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
	// renderItem: function (props, propName, componentName) {
	// 	console.log(props);
	// 	console.log(propName);
	// 	console.log(componentName);
	// 	var fn = props[propName];
	// 	console.log(typeof fn);
	// 	console.log(fn.prototypes);
	// 	if (
	// 		!fn.prototype ||
	// 		(typeof fn.prototype.constructor !== 'function' && fn.prototype.constructor.length !== 1)
	// 	) {
	// 		return new Error(propName + 'must be a function with 2 args');
	// 	}
	// }
};

export default FlatList;
