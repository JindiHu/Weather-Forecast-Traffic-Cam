import {
	ENTER_MOBILE_MODE,
	EXIT_MOBILE_MODE,
	ENTER_TOUCH_MODE,
	EXIT_TOUCH_MODE,
	SET_APP_WIDTH,
	SET_ONLINE,
	SET_OFFLINE,
	SET_BODY_NO_SCROLL,
	SET_BODY_SCROLL
} from '../constants/ActionTypes';

const initialState = {
	appWidth: null,
	isMobile: window.innerWidth <= 768 ? true : false,
	isTouch: false,
	isOnline: navigator.onLine,
	noScroll: false
};

const app = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ENTER_MOBILE_MODE:
			return { ...state, isMobile: true };
		case EXIT_MOBILE_MODE:
			return { ...state, isMobile: false };
		case ENTER_TOUCH_MODE:
			return { ...state, isTouche: true };
		case EXIT_TOUCH_MODE:
			return { ...state, isTouche: false };
		case SET_APP_WIDTH:
			return { ...state, appWidth: payload.appWidth };
		case SET_ONLINE:
			return { ...state, isOnline: true };
		case SET_OFFLINE:
			return { ...state, isOnline: false };
		case SET_BODY_NO_SCROLL:
			return { ...state, noScroll: true };
		case SET_BODY_SCROLL:
			return { ...state, noScroll: false };
		default:
			return state;
	}
};

export default app;
