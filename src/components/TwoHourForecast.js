import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import FlatList from './FlatList';
import Card from './Card';
import Spinner from './Spinner';
import agent from '../agent';
import { SET_TWO_HOUR, SET_TRAFFIC_CAMERAS } from '../constants/ActionTypes';
import { getDistance, getWeatherIconPath } from '../utils';

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

const TwoHourForecast = ({ dispatch, forecastsState: { twoHour }, filtersState: { selectedDatetime } }) => {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let mounted = true;
		setIsLoading(true);
		const formattedDatetime = moment(selectedDatetime).format('YYYY-MM-DD[T]HH:mm:ss');
		Promise.all([
			agent.TrafficImages.getCameras(formattedDatetime),
			agent.WeatherForecast.getTwoHour(formattedDatetime)
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
							type: SET_TWO_HOUR,
							payload: { twoHour: getLocations(trafficRes.data, twoHourForecastRes.data) }
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
		<React.Fragment>
			{isLoading ? (
				<div className="row">
					<div className="col-md-12">
						<Spinner />
					</div>
				</div>
			) : (
				<React.Fragment>
					{twoHour?.length > 0 ? (
						<FlatList
							className="form-row"
							data={twoHour}
							renderItem={({ item }) => {
								const weatherIconPath = getWeatherIconPath(item.forecast);
								return (
									<div className="col-lg-4 col-md-6">
										<Card
											className="mb-2 bg-light border-0"
											isHoverable={true}
											onClick={() => {
												dispatch({
													type: SET_TRAFFIC_CAMERAS,
													payload: { cameras: item.cameras || [] }
												});
											}}
										>
											<Card.Body>
												<div className="d-flex justify-content-between align-items-end">
													<div>
														<div>{item.name}</div>
														<div className="text-muted">{item.forecast}</div>
													</div>
													{weatherIconPath && (
														<img
															src={weatherIconPath}
															alt={item.forecast}
															width={40}
															height={40}
														/>
													)}
												</div>
											</Card.Body>
										</Card>
									</div>
								);
							}}
							keyExtractor={(item) => item.name}
						/>
					) : (
						<div className="row">
							<div className="col-md-12 text-center">No Data Found</div>
						</div>
					)}
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => ({
	forecastsState: state.forecasts,
	filtersState: state.filters
});

export default connect(mapStateToProps)(TwoHourForecast);
