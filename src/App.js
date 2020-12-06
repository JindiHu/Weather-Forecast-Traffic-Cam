// import { useEffect } from 'react';
// import api from './api';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	// useEffect(() => {
	// 	api.getTrafficImages
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
			<div className="App"></div>
		</Provider>
	);
}

export default App;
