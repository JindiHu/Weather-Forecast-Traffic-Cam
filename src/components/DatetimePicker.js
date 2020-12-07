const DatetimePciker = () => {
	return (
		<div className="row">
			<div className="col-sm-4">
				<div className="form-group">
					<label htmlFor="date-input">Date</label>
					<input id="date-input" className="form-control" type="text" name="date" />
				</div>
			</div>
			<div className="col-sm-4">
				<div className="form-group">
					<label htmlFor="time-input">Time</label>
					<input id="time-input" className="form-control" type="text" name="date" />
				</div>
			</div>
		</div>
	);
};

export default DatetimePciker;
