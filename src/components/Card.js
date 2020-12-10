import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
	const { children, className, isHoverable, onClick } = props;
	const [isHovered, setIsHovered] = useState(false);
	let cardClassName = 'card' + (className ? ` ${className}` : '');
	if (isHoverable && isHovered) {
		cardClassName += ' hovered';
	}
	return (
		<div
			className={cardClassName}
			onMouseEnter={() => {
				setIsHovered(true);
			}}
			onMouseLeave={() => {
				setIsHovered(false);
			}}
			onMouseDown={onClick}
			onClick={(e) => {
				e.preventDefault();
			}}
		>
			{children}
		</div>
	);
};

Card.Header = (props) => {
	const { children } = props;
	return <div className="card-header">{children}</div>;
};

Card.Body = (props) => {
	const { children } = props;
	return <div className="card-body">{children}</div>;
};

Card.defaultProps = {
	isHoverable: false
};

export default Card;
