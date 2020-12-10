import React from 'react';
import { connect } from 'react-redux';
import { CLEAR_TRAFFIC_CAMERAS } from '../constants/ActionTypes';
import Modal from './Modal';
import FlatList from './FlatList';

const TrafficCameras = ({ dispatch, trafficCamerasState: { showCameras, cameras } }) => {
	return (
		<React.Fragment>
			{showCameras && (
				<Modal
					onClose={() => {
						dispatch({ type: CLEAR_TRAFFIC_CAMERAS });
					}}
					title={'Cameras'}
					body={
						<React.Fragment>
							{cameras.length > 0 ? (
								<FlatList
									className="form-row"
									data={cameras}
									renderItem={({ item }) => {
										return (
											<div className="col-md-6">
												<img src={item.image} width={'100%'} />
											</div>
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
	trafficCamerasState: state.trafficCameras
});

export default connect(mapStateToProps)(TrafficCameras);
