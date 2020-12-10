import { SET_TWO_HOUR, SET_TWENTY_FOUR_HOUR, SET_FOUR_DAY } from '../constants/ActionTypes';
const initialState = {
	twoHour: [],
	twentyFourHour: {},
	fourDay: {}
};

const forecasts = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_TWO_HOUR:
			return { ...state, twoHour: payload.twoHour };
		case SET_TWENTY_FOUR_HOUR:
			return { ...state, twentyFourHour: payload.twentyFourHour };
		case SET_FOUR_DAY:
			return { ...state, fourDay: payload.fourDay };
		default:
			return state;
	}
};

export default forecasts;
