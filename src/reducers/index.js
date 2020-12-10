import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from './app';
import filters from './filters';
import forecasts from './forecasts';
import trafficCameras from './trafficCameras';

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		app,
		filters,
		forecasts,
		trafficCameras
	});

export default createRootReducer;
