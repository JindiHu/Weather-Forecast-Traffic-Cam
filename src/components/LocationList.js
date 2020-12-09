import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import FlatList from './FlatList';
import Card from './Card';
import Spinner from './Spinner';
import agent from '../agent';
import { SET_LOCATIONS } from '../constants/ActionTypes';
import { datetimeFormatter, getDistance, getWeatherIconPath } from '../utils';

const getLocations = (trafficImages, twoHourForecast) => {
	const cameras = trafficImages.items[0]?.cameras || [];
	const forecasts = twoHourForecast.items[0]?.forecasts || [];
	const areaMeta = twoHourForecast.area_metadata || [];
	const locations = [...areaMeta];
	cameras.forEach((camera) => {
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
			if (!('forecast' in locations[areaIdx])) {
				locations[areaIdx].forecast = forecasts[areaIdx].forecast;
			}
		});
		locations[shortestKey].cameras =
			'cameras' in locations[shortestKey] ? [...locations[shortestKey].cameras, camera] : [camera];
	});
	return locations;
};

const LocationList = ({ dispatch, locationsState: { locations }, filtersState: { selectedDatetime } }) => {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let mounted = true;
		setIsLoading(true);
		Promise.all([
			agent.TrafficImages.getCameras(datetimeFormatter(selectedDatetime)),
			agent.WeatherForecast.getTwoHour(datetimeFormatter(selectedDatetime))
		])
			.then((results) => {
				const [trafficRes, twoHourForecastRes] = results;
				if (
					trafficRes.status === 200 &&
					trafficRes.data &&
					twoHourForecastRes.status === 200 &&
					twoHourForecastRes.data
				) {
					if (mounted) {
						dispatch({
							type: SET_LOCATIONS,
							payload: { locations: getLocations(trafficRes.data, twoHourForecastRes.data) }
						});
					}
				}
			})
			.finally(() => {
				if (mounted) setIsLoading(false);
			});
		return function cleanup() {
			mounted = false;
		};
	}, [dispatch, selectedDatetime]);

	return (
		<div className="row">
			<div className="col-md-8">
				{isLoading ? (
					<Spinner />
				) : (
					<FlatList
						className="row"
						data={locations}
						renderItem={({ item }) => {
							const weatherIconPath = getWeatherIconPath(item.forecast);
							return (
								<div className="col-sm-6">
									<Card className="mb-2">
										<Card.Body>
											<div>{item.name}</div>
											<div className="text-muted">{item.forecast}</div>
											{weatherIconPath && (
												<img src={weatherIconPath} alt={item.forecast} width={40} height={40} />
											)}
										</Card.Body>
									</Card>
								</div>
							);
						}}
						keyExtractor={(item) => item.name}
					/>
				)}
			</div>
			<div className="col-md-4"></div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	locationsState: state.locations,
	filtersState: state.filters
});

export default connect(mapStateToProps)(LocationList);
