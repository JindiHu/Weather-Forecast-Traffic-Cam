import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './configureStore';
import rootRoutes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					{rootRoutes.map((route) => {
						if (route.redirectTo) {
							return (
								<Redirect
									from={route.path}
									exact={route.exact}
									to={route.redirectTo}
									key={route.name}
								/>
							);
						} else {
							return (
								<Route
									path={route.path}
									exact={route.exact}
									component={route.component}
									key={route.name}
								/>
							);
						}
					})}
				</Switch>
			</ConnectedRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
