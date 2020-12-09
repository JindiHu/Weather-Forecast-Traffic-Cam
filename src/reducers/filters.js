import { SET_SELECTED_DATE, SET_SELECTED_TIME } from '../constants/ActionTypes';

const initialState = {
	selectedDatetime: new Date()
};

const filters = (state = initialState, action) => {
	const { type, payload } = action;
	const newDatetime = new Date(state.selectedDatetime.getTime());
	switch (type) {
		case SET_SELECTED_DATE:
			newDatetime.setFullYear(payload.date.getFullYear());
			newDatetime.setMonth(payload.date.getMonth());
			newDatetime.setDate(payload.date.getDate());
			return { ...state, selectedDatetime: newDatetime };
		case SET_SELECTED_TIME:
			newDatetime.setHours(payload.time.getHours());
			newDatetime.setMinutes(payload.time.getMinutes());
			newDatetime.setSeconds(payload.time.getSeconds());
			return { ...state, selectedDatetime: newDatetime };
		default:
			return state;
	}
};

export default filters;
