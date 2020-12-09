import React from 'react';

const Card = (props) => {
	const { children, className } = props;
	return <div className={'card' + (className ? ` ${className}` : '')}>{children}</div>;
};

Card.Header = (props) => {
	const { children } = props;
	return <div className="card-header">{children}</div>;
};

Card.Body = (props) => {
	const { children } = props;
	return <div className="card-body">{children}</div>;
};

export default Card;
