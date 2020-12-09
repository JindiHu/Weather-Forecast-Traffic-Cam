import React from 'react';
import Filters from './Filters';
import LocationList from './LocationList';

const Content = () => {
	return (
		<div className="content container py-3">
			<Filters />
			<LocationList />
		</div>
	);
};

export default Content;
