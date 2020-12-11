import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
	return (
		<nav className="navbar navbar-expand-lg">
			<Link className="navbar-brand" to="/">
				<img src="/logo_govtech_hort.gif" height={80}  alt="logo"/>
			</Link>
		</nav>
	);
};

export default Header;
