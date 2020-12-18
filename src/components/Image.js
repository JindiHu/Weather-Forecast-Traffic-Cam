import React, { useState } from 'react';

const Image = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const style = {};
	if (isLoading) {
		style['display'] = 'none';
	}
	return (
		<React.Fragment>
			{isLoading && 'Loading...'}
			<img
				style={style}
				{...props}
				onLoad={() => {
					setIsLoading(false);
					console.log('img ready');
				}}
			/>
		</React.Fragment>
	);
};

export default Image;
