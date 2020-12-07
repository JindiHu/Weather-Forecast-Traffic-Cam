import React from 'react';

const Card = (props) => {
	const { children, Header } = props;
	console.log(Header);
	return (
		<div className="card">
			{React.Children.map(children, (child) => {
				return child;
			})}
		</div>
	);
};

Card.Header = (props) => {
	const { children } = props;
	return (
		<div className="card-header">
			{React.Children.map(children, (child) => {
				return child;
			})}
		</div>
	);
};

Card.Body = (props) => {
	const { children } = props;
	return (
		<div className="card-Body">
			{React.Children.map(children, (child) => {
				return child;
			})}
		</div>
	);
};

// Card.ListGroup = (props) => {
// 	const { children } = props;
// 	return (
// 		<div className="list-group">
// 			{React.Children.map(children, (child) => {
// 				return child;
// 			})}
// 		</div>
// 	);
// };

// Card.ListGroup.Item = (props) => {
// 	const { children } = props;
// 	return (
// 		<div className="list-group-item">
// 			{React.Children.map(children, (child) => {
// 				return child;
// 			})}
// 		</div>
// 	);
// };

export default Card;
