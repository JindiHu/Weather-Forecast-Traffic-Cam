import React, { useState } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import { SET_SELECTED_DATE, SET_SELECTED_TIME } from '../constants/ActionTypes';
import 'react-datepicker/dist/react-datepicker.css';

const Filters = ({ dispatch, filtersState: { selectedDatetime } }) => {
	
	return (
		<div className="d-flex">
			<div className="form-group mr-1">
				<DatePicker
					className="form-control input-lg"
					selected={selectedDatetime}
					onChange={(value) => {
						dispatch({ type: SET_SELECTED_DATE, payload: { date: value } });
					}}
					dateFormat="dd MMM yyyy"
				/>
			</div>
			<div className="form-group ml-1">
				<DatePicker
					className="form-control"
					selected={selectedDatetime}
					onChange={(value) => {
						dispatch({ type: SET_SELECTED_TIME, payload: { time: value } });
					}}
					showTimeSelect
					showTimeSelectOnly
					timeIntervals={10}
					timeCaption="Time"
					dateFormat="h:mm aa"
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	filtersState: state.filters
});

export default connect(mapStateToProps)(Filters);
