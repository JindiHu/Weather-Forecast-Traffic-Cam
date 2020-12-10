import React from 'react';
import './Modal.css';

const Modal = ({ onClose, title, body, footer }) => {
	return (
		<React.Fragment>
			<div className="modal d-block">
				<div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">{title}</h5>
							<button type="button" className="close" onClick={onClose}>
								<span>&times;</span>
							</button>
						</div>
						<div className="modal-body">{body}</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" onClick={onClose}>
								Close
							</button>
							{footer}
						</div>
					</div>
				</div>
			</div>
			<div className="modal-backdrop fade show"></div>
		</React.Fragment>
	);
};

export default Modal;
