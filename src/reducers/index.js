import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from './app';
import trafficImages from './trafficImages';

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		app,
		trafficImages
	});

export default createRootReducer;
