import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

const middleware = [];
if (process.env.NODE_ENV !== 'production') {
	middleware.push(createLogger());
}

export default function configureStore(preloadedState) {
	const store = createStore(
		createRootReducer(history),
		preloadedState,
		compose(applyMiddleware(routerMiddleware(history), ...middleware))
	);
	return store;
}
