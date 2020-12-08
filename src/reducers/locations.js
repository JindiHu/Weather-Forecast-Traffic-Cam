import { SET_LOCATIONS } from '../constants/ActionTypes';
const initialState = {
	locations: []
};

const locations = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_LOCATIONS:
			return { ...state, locations: payload.locations };
		default:
			return state;
	}
};

export default locations;
