import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import trafficImages from './trafficImages';

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		trafficImages
	});

export default createRootReducer;
