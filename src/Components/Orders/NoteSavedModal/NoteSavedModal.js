import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from "antd";

import Modal from "../../Generic/Modal";

const NoteSavedModal = () => {
	const { subRoute, orderId } = useParams();
	const history = useHistory();

	const handleSubmit = () => {
		console.log("sdsdf");
		history.push(`/orders/${subRoute}/${orderId}/info`);
	};

  return (
		<Modal modalWillUnmount={handleSubmit}>
			<div id="reason-for-return-modal" className="container blue">
				<h2 className="font-30 orange pop-semibold mt-5 mb-4">
					<center>Note Saved!</center>
				</h2>
				<center>
					<Button
						htmlType="submit"
						className="blue-bg curved-btn white mt-2 mb-sm-2 mb-md-4 mr-2"
						onClick={handleSubmit}
					>
						Proceed
					</Button>
				</center>
			</div>
		</Modal>
	);
};

export default NoteSavedModal;