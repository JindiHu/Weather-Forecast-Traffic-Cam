import TwoHourForecast from '../components/TwoHourForecast';
import TwentyFourHourForecast from '../components/TwentyFourHourForecast';
import FourDayForecast from '../components/FourDayForecast';

const contentRoutes = [
	{ name: '2-Hour Nowcast', shortName: '2-Hour', path: '/2-hour-nowcast', exact: false, component: TwoHourForecast },
	{
		name: '24-Hour Forecast',
		shortName: '24-Hour',
		path: '/24-hour-forecast',
		exact: false,
		component: TwentyFourHourForecast
	},
	{ name: '4-Day Outlook', shortName: '4-Day', path: '/4-day-outlook', exact: false, component: FourDayForecast }
];

export default contentRoutes;
