import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DatetimePicker from './DatetimePicker';
import FlatList from './FlatList';
import Card from './Card';
import agent from '../agent';
import { SET_LOCATIONS } from '../constants/ActionTypes';
import { getDistance } from '../utils';

const getLocations = (trafficImages, weatherForecast) => {
	const cameras = trafficImages.items[0]?.cameras;
	const forecasts = weatherForecast.items[0]?.forecasts;
	const areaMeta = weatherForecast.area_metadata;

	return cameras.map((camera, key) => {
		let shortest = null;
		let shortestKey = -1;

		areaMeta.forEach((area, areaIdx) => {
			const labelLocation = area.label_location;
			const distance = getDistance(camera.location, labelLocation);
			if (shortest != null) {
				if (distance < shortest) {
					shortest = distance;
					shortestKey = areaIdx;
				}
			} else {
				shortest = distance;
				shortestKey = areaIdx;
			}
		});
		return { ...camera, ...forecasts[shortestKey] };
	});
};

const Content = ({ dispatch, locationsState: { locations } }) => {
	useEffect(() => {
		let mounted = true;
		Promise.all([agent.TrafficImages.getByDateTime, agent.WeatherForecast.getTwoHour]).then((results) => {
			const [trafficRes, weatherRes] = results;
			if (trafficRes.status === 200 && trafficRes.data && weatherRes.status === 200 && weatherRes.data) {
				if (mounted) {
					dispatch({
						type: SET_LOCATIONS,
						payload: { locations: getLocations(trafficRes.data, weatherRes.data) }
					});
				}
			}
		});
		return function cleanup() {
			mounted = false;
		};
	}, [dispatch]);
	return (
		<div className="content container py-3">
			<DatetimePicker />
			<Card>
				<Card.Header>Locations</Card.Header>
				<Card.Body>
					<FlatList
						className="list-group list-group-flush"
						data={locations}
						renderItem={({ item }) => {
							return (
								<div className="list-group-item">
									{item.camera_id}. {item.area}
								</div>
							);
						}}
						keyExtractor={(item) => item.camera_id}
					/>
				</Card.Body>
			</Card>
		</div>
	);
};

const mapStateToProps = (state) => ({
	locationsState: state.locations
});

export default connect(mapStateToProps)(Content);
