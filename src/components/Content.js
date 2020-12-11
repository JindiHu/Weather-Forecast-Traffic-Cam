import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link, matchPath } from 'react-router-dom';
import Filters from './Filters';
import TrafficCameras from './TrafficCameras';
import contentRoutes from '../routes/content';

const Content = ({
	appState: { isMobile },
	routerState: {
		location: { pathname }
	}
}) => {
	return (
		<div className="content container py-3">
			<Filters />
			<ul className="nav nav-tabs">
				{contentRoutes.map((route) => {
					return (
						<li className="nav-item" key={route.name}>
							<Link
								className={'nav-link' + (matchPath(pathname, route) ? ' active' : '')}
								to={route.path}
							>
								{isMobile ? route.shortName : route.name}
							</Link>
						</li>
					);
				})}
			</ul>
			<div className="p-3 border border-top-0">
				<Switch>
					{contentRoutes.map((route) => (
						<Route path={route.path} exact={route.exact} component={route.component} key={route.name} />
					))}
				</Switch>
			</div>
			<TrafficCameras />
		</div>
	);
};

const mapStateToProps = (state) => ({
	appState: state.app,
	routerState: state.router
});

export default connect(mapStateToProps)(Content);
