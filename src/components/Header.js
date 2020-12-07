import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
	return (
		<nav className="navbar navbar-expand-lg">
			<Link className="navbar-brand" to="/">
				Logo Here
			</Link>
		</nav>
	);
};

export default Header;