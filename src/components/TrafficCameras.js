import React from 'react';
import { connect } from 'react-redux';
import { CLEAR_TRAFFIC_CAMERAS, SET_BODY_SCROLL } from '../constants/ActionTypes';
import Modal from './Modal';
import FlatList from './FlatList';

const TrafficCameras = ({ dispatch, appState: { isMobile }, trafficCamerasState: { showCameras, cameras } }) => {
	console.log(isMobile);
	return (
		<React.Fragment>
			{showCameras && (
				<Modal
					onClose={() => {
						dispatch({ type: CLEAR_TRAFFIC_CAMERAS });
						dispatch({ type: SET_BODY_SCROLL });
					}}
					title={'Cameras'}
					body={
						<React.Fragment>
							{cameras.length > 0 ? (
								<FlatList
									className="d-flex flex-wrap justify-content-center mt-n3"
									data={cameras}
									renderItem={({ item }) => {
										return (
											<React.Fragment>
												{isMobile ? (
													<img className="mt-3" src={item.image} width={'100%'} />
												) : (
													<img className="mt-3 mx-2" src={item.image} height={200} />
												)}
											</React.Fragment>
										);
									}}
									keyExtractor={(item) => item.camera_id}
								/>
							) : (
								<div className="row">
									<div className="col-md-12 text-center">No Camera Found</div>
								</div>
							)}
						</React.Fragment>
					}
					footer={''}
				/>
			)}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => ({
	appState: state.app,
	trafficCamerasState: state.trafficCameras
});

export default connect(mapStateToProps)(TrafficCameras);
