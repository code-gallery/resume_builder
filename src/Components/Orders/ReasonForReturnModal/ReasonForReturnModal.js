import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Form, Button, Input } from "antd";

import Modal from "../../Generic/Modal";
import { utils } from '../../../utils';
import "./reasonForReturnModal.css";

const RequestModal = () => {
	const { subRoute, orderId } = useParams();
	const [formFields, setFormFields] = useState({});
	const history = useHistory();

	const handleCancel = (e) => {
		history.push(`/orders/${subRoute}/${orderId}`);
	};

	const handleSubmit = (data) => {
		console.log(data);
		history.push(`/orders/${subRoute}/${orderId}/confirm`);
	};

  return (
		<Modal modalWillUnmount={handleCancel}>
			<div id="reason-for-return-modal" className="container blue">
				<h2 className="font-30 orange pop-semibold mb-4">
					Reason for {utils.capitalize(subRoute)}
				</h2>
				<Form onFinish={handleSubmit} fields={formFields}>
					<Form.Item
						name="note"
						rules={[{ required: true, message: "Please enter your note" }]}
					>
						<Input.TextArea
							rows={4}
							className="mb-3"
							placeholder="Type your note"
						/>
					</Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="curved-btn white mt-2 mb-sm-2 mb-md-4 mr-2"
					>
						Save
					</Button>
					<Button
						htmlType="button"
						className="blue-bg curved-btn white mt-2 mb-sm-2 mb-md-4"
						onClick={handleCancel}
					>
						Cancel
					</Button>
				</Form>
			</div>
		</Modal>
	);
};

export default RequestModal;