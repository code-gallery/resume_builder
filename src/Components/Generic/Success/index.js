import React from 'react';

const Success = ({ children }) => {
  return (
		<div className="d-flex justify-content-center h-85vh">
			<div className="d-flex flex-column justify-content-center">
				<div className="pop-semibold font-35 orange mb-2">
					<center>Success!</center>
				</div>
				{children}
			</div>
		</div>
	);
};

export default Success;