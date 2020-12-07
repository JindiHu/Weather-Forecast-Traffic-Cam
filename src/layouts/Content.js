import React, { useEffect } from 'react';
import DatetimePicker from '../components/DatetimePicker';
import FlatList from '../components/FlatList';
import agent from '../agent';

const Content = (props) => {
	useEffect(() => {
		Promise.all([agent.TrafficImages.getByDateTime, agent.WeatherForecase.getTwoHour]).then((results) => {
			console.log(results);
		});
	}, []);
	return (
		<div className="content container my-3">
			<DatetimePicker />
			<FlatList
				data={[]}
				renderItem={({ item }) => {
					console.log('render item');
				}}
			/>
		</div>
	);
};

export default Content;
