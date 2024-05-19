import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Radio } from 'antd';

import Modal from "../../Generic/Modal";

const RequestModal = () => {
	const { orderId } = useParams();
	const history = useHistory();
	const [value, setValue] = useState("exchange");

	const handleRadioChange = (e) => {
		setValue(e.target.value);
	};

	const handleRequest = () => {
		history.push(`/orders/${value}/${orderId}`);
	};

	const toOrderHistory = () => {
		history.push("/order-history");
	};

  return (
		<Modal modalWillUnmount={toOrderHistory}>
			<div className="container blue">
				<h2 className="font-30 orange pop-semibold mb-4">
					Refund / Exchange Request
				</h2>
				<div className="mt-2 mb-2">I would like to request a:</div>
				<Radio.Group
					className="d-flex flex-column"
					onChange={handleRadioChange}
					value={value}
				>
					<Radio className="mb-2" value={"exchange"}>
						Exchange
					</Radio>
					<Radio className="mb-2" value={"refund"}>
						Refund
					</Radio>
				</Radio.Group>
				<Button
					htmlType="submit"
					className="blue-bg curved-btn white mt-2 mb-4"
					onClick={handleRequest}
				>
					Request
				</Button>
			</div>
		</Modal>
	);
};

export default RequestModal;