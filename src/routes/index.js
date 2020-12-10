import App from '../components/App';

const rootRoutes = [
	{ name: 'app', path: '/', exact: true, redirectTo: '/2-hour-nowcast' },
	{ name: 'app', path: '/', exact: false, component: App }
];

export default rootRoutes;
