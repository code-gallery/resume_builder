import React from 'react';
import { useHistory } from 'react-router-dom';
import { Checkbox, Button, Form } from "antd";

const ImportantInformation = () => {
  const history = useHistory();
  
  const handleAccept = (data) => {
    console.log(data);
    history.push("/order-history");
  };

  return (
		<div id="important-information font-18">
			<h2 className="orange font-30 pop-semibold">Important Information</h2>
			<div className="col-md-7 nopadding-left">
				<div className="mb-4">
					If you are exchanging clothing items/products, please include an
					Australia Post bag with your return delivery so we can send the
					exchange back to you. If this is not provided with the return, there
					will be an additional freight charge to you which will be quoted
					separately.
				</div>
				<div>
					1. Please ensure you include a copy of your original order
					confirmation you received by email.
				</div>
				<div className="mb-4">
					2. Please Note: We will only accept and credit garment returns in
					their original packaging and folded correctly.
				</div>
				<div className="mb-4">
					In the event where we require to send garments to a dry cleaner, all
					costs associated with this including freight and repackaging will be
					incurred by the client.
				</div>
				<div className="mb-4">
					3. Please ensure carton/package is clearly marked with the following
					address:
					<div>DKM BLUE</div>
					<div>C/O Savannah Lee</div>
					<div>158 Salisbury Road</div>
					<div>Camperdown NSW 2050</div>
				</div>
				<div>
					4. If there are any queries, please contact Online Co-Ordinator at DKM
					Blue on (02) 9560 7700 Please note returns are normally processed
					between 3-5 days upon receipt
				</div>
				<div className="pop-semibold mb-4">
					RETURNS ARE ONLY POSSIBLE IF THIS FORM IS PROCESSED WITHIN FOURTEEN
					(14) BUSINESS DAYS FROM DELIVERY
				</div>
			</div>
			<Form fields={[{}]} onFinish={handleAccept}>
				<Form.Item
					name="accept"
					rules={[
						{
							required: true,
							message: "Please read the above terms and accept",
						},
						{
							type: "boolean",
							message: "Please read the above terms and accept",
						},
					]}
					valuePropName="checked"
				>
					<Checkbox>I accept</Checkbox>
				</Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					className="curved-btn white orange-bg"
				>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default ImportantInformation;