const DatetimePciker = () => {
	return (
		<div className="d-flex">
			<div className="form-group mr-1">
				<label htmlFor="date-input">Date</label>
				<input id="date-input" className="form-control" type="text" name="date" />
			</div>
			<div className="form-group ml-1">
				<label htmlFor="time-input">Time</label>
				<input id="time-input" className="form-control" type="text" name="date" />
			</div>
		</div>
	);
};

export default DatetimePciker;
