import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import FlatList from './FlatList';
import Card from './Card';
import Spinner from './Spinner';
import Temperature from './Temperature';
import Humidity from './Humidity';
import Wind from './Wind';
import agent from '../agent';
import { SET_FOUR_DAY } from '../constants/ActionTypes';
import { getWeatherIconPath } from '../utils';

const FourDayForecast = ({ dispatch, forecastsState: { fourDay }, filtersState: { selectedDatetime } }) => {
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		let mounted = true;
		setIsLoading(true);
		const formattedDatetime = moment(selectedDatetime).format('YYYY-MM-DD[T]HH:mm:ss');
		agent.WeatherForecast.getFourDay(formattedDatetime)
			.then((results) => {
				if (results.status === 200 && results.data) {
					const forecastInfo = results.data.items[0] || {};
					dispatch({ type: SET_FOUR_DAY, payload: { fourDay: forecastInfo } });
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
					{fourDay.forecasts?.length > 0 ? (
						<FlatList
							className="form-row"
							data={fourDay.forecasts}
							renderItem={({ item: { forecast, date, temperature, relative_humidity, wind } }) => {
								const weatherIconPath = getWeatherIconPath(forecast);
								const newDate = new Date(date);
								const formattedDate = moment(newDate).format('dddd, Do MMM YYYY');
								return (
									<div className="col-lg-6">
										<Card className="mb-2 bg-light border-0">
											<Card.Body>
												<div className="d-flex justify-content-between align-items-end">
													<div>
														<h5>{formattedDate}</h5>
														<div className="text-muted">{forecast}</div>
													</div>
													{weatherIconPath && (
														<img
															src={weatherIconPath}
															alt={forecast}
															width={40}
															height={40}
														/>
													)}
												</div>
												<div className="d-flex mt-3">
													<div className="flex-grow-1">
														<Temperature low={temperature.low} high={temperature.high} />
													</div>
													<div  className="flex-grow-1">
														<Humidity
															low={relative_humidity.low}
															high={relative_humidity.high}
														/>
														<Wind direction={wind.direction} speed={wind.speed} />
													</div>
												</div>
											</Card.Body>
										</Card>
									</div>
								);
							}}
							keyExtractor={(item) => item.date}
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

export default connect(mapStateToProps)(FourDayForecast);
