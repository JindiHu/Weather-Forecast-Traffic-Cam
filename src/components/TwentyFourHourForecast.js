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
import { SET_TWENTY_FOUR_HOUR } from '../constants/ActionTypes';
import { getWeatherIconPath } from '../utils';

const TwentyFourHourForecast = ({
	dispatch,
	forecastsState: { twentyFourHour },
	filtersState: { selectedDatetime }
}) => {
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		let mounted = true;
		setIsLoading(true);
		const formattedDatetime = moment(selectedDatetime).format('YYYY-MM-DD[T]HH:mm:ss');
		agent.WeatherForecast.getTwentyFourHour(formattedDatetime)
			.then((results) => {
				if (results.status === 200 && results.data) {
					const forecastInfo = results.data.items[0] || {};
					dispatch({ type: SET_TWENTY_FOUR_HOUR, payload: { twentyFourHour: forecastInfo } });
				}
			})
			.finally(() => {
				if (mounted) setIsLoading(false);
			});
		return function cleanup() {
			mounted = false;
		};
	}, [dispatch, selectedDatetime]);
	const { general, periods } = twentyFourHour;
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
					{general && Object.keys(general).length > 0 ? (
						<div className="d-flex">
							<div className="flex-grow-1 d-flex pr-2">
								<div className="flex-grow-1">
									<h5>24-hour Forecast</h5>
									{general?.forecast} over many areas
								</div>
								<Temperature low={general?.temperature.high} high={general?.temperature.low} />
							</div>
							<div className="border-left pl-3">
								<Humidity low={general?.relative_humidity.low} high={general?.relative_humidity.high} />
                                <Wind direction={general?.wind.direction} speed={general?.wind.speed} />
							</div>
						</div>
					) : (
						<div className="row">
							<div className="col-md-12 text-center">No Data Found</div>
						</div>
					)}
					{periods?.length > 0 && (
						<FlatList
							className="mt-4"
							data={periods}
							renderItem={({ item: period }) => {
								return (
									<div>
										<h6>
											{moment(period.time.start).format('dddd, Do MMM YYYY, hA')} -{' '}
											{moment(period.time.end).format('dddd, Do MMM YYYY, hA')}
										</h6>
										<FlatList
											className="form-row mb-4"
											data={Object.entries(period.regions)}
											renderItem={({ item: [region, forecast] }) => {
												const weatherIconPath = getWeatherIconPath(forecast);
												return (
													<div className="col-lg-4 col-md-6">
														<Card className="mb-2 bg-light border-0">
															<Card.Body>
																<div className="d-flex justify-content-between align-items-end">
																	<div>
																		<div className="text-uppercase">{region}</div>
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
															</Card.Body>
														</Card>
													</div>
												);
											}}
											keyExtractor={(region) => region[0]}
										/>
									</div>
								);
							}}
							keyExtractor={(period) => `${period.time.start}${period.time.end}`}
						/>
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

export default connect(mapStateToProps)(TwentyFourHourForecast);
