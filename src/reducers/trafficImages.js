import { SET_TRAFFIC_IMAGES } from '../constants/ActionTypes';
const initialState = {
	items: []
};

const trafficImages = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_TRAFFIC_IMAGES:
			return { ...state, items: payload.items };
		default:
			return state;
	}
};

export default trafficImages;
