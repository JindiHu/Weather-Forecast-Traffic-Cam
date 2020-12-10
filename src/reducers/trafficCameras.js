import { SET_TRAFFIC_CAMERAS, CLEAR_TRAFFIC_CAMERAS } from '../constants/ActionTypes';
const initialState = {
	showCameras: false,
	cameras: []
};

const trafficImages = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_TRAFFIC_CAMERAS:
			return { ...state, showCameras: true, cameras: payload.cameras };
		case CLEAR_TRAFFIC_CAMERAS:
			return { ...state, showCameras: false, cameras: [] };
		default:
			return state;
	}
};

export default trafficImages;
