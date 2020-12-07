// import { useEffect } from 'react';
// import agent from './agent';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './configureStore';
import appRoutes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

function App() {
	// useEffect(() => {
	// 	agent.TrafficImages.byDateTime
	// 		.then((response) => {
	// 			if (response.status === 200) {
	// 				const {
	// 					data: { items }
	// 				} = response;
	// 				console.log(items);
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// }, []);
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					{appRoutes.map((route) => {
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
	);
}

export default App;
