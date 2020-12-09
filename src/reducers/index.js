import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from './app';
import filters from './filters';
import locations from './locations';
import trafficImages from './trafficImages';

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		app,
		filters,
		locations,
		trafficImages
	});

export default createRootReducer;
