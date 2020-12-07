import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { ENTER_MOBILE_MODE, EXIT_MOBILE_MODE, ENTER_TOUCH_MODE, EXIT_TOUCH_MODE } from '../constants/ActionTypes';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { isTouchDevice } from '../utils';
import './App.css';

const App = (props) => {
	const onWindowResize = useCallback(() => {
		if (props.appState.isMobile) {
			if (window.innerWidth > 768) {
				props.dispatch({ type: EXIT_MOBILE_MODE });
			}
		} else {
			if (window.innerWidth <= 768) {
				props.dispatch({ type: ENTER_MOBILE_MODE });
			}
		}
		if (props.appState.isTouch) {
			if (window.innerWidth > 1366) {
				props.dispatch({ type: EXIT_TOUCH_MODE });
			}
		} else {
			if (window.innerWidth <= 1366 && isTouchDevice()) {
				props.dispatch({ type: ENTER_TOUCH_MODE });
			}
		}
	}, [props]);

	useEffect(() => {
		onWindowResize();
		window.addEventListener('resize', onWindowResize);

		return () => {
			window.removeEventListener('resize', onWindowResize);
		};
	}, [onWindowResize]);

	useEffect(() => {
		window.dispatchEvent(new Event('resize'));
	}, [props.location]);

	const classNames = [];
	if (props.appState.isMobile) {
		classNames.push('mobile');
	}
	if (props.appState.isTouch) {
		classNames.push('touch');
	}

	return (
		<div id="app" className={classNames.join(' ')}>
			<div className="container">
				<Header />
				<Content />
				<Footer />
			</div>
		</div>
	);
};
const mapStateToProps = (state) => ({
	appState: state.app
});

export default connect(mapStateToProps)(App);
