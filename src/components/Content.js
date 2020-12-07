import React, { useEffect } from 'react';
import DatetimePicker from '../components/DatetimePicker';
import FlatList from '../components/FlatList';
import agent from '../agent';

const getLocations = (trafficImages, weatherForecast) => {
	const cameras = trafficImages.items[0]?.cameras;
	console.log(cameras);
	const locations = cameras.map(() => {
		
	});
};

const Content = (props) => {
	useEffect(() => {
		let mounted = true;
		Promise.all([agent.TrafficImages.getByDateTime, agent.WeatherForecast.getTwoHour])
			.then((results) => {
				const [trafficRes, weatherRes] = results;
				if (trafficRes.status === 200 && trafficRes.data && weatherRes.status === 200 && weatherRes.data) {
					console.log(trafficRes.data, weatherRes.data);
					getLocations(trafficRes.data, weatherRes.data);
				}
			});
		return function cleanup() {
			mounted = false;
		};
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
