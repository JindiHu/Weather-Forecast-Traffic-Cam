import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from './app';
import locations from './locations';
import trafficImages from './trafficImages';

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		app,
		locations,
		trafficImages
	});

export default createRootReducer;
