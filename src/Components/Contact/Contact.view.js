import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

const ContactView = ({ formFields, handleSubmit }) => {
	return (
		<div id="contact">
			<h2 className="pop-semibold font-30 orange mb-4">Contact</h2>
			<div className="row">
				<div className="col-12 col-md-5">
					<div className="pop-semibold font-24 sub-heading">
						Head Office Hours
					</div>
					<div className="mb-4">
						<div>9 - 5:30 pm Weekdays</div>
						<div>
							<span className="orange">P</span>{" "}
							<a href="tel:+61295607700">+61 2 9560 7700</a>
						</div>
						<div>
							<span className="orange">F</span>{" "}
							<a href="tel:+61295607766">+61 2 9560 7766</a>
						</div>
					</div>
					<div className="mb-4">
						<div>158 Salisbury Road,</div>
						<div>Camperdown</div>
						<div>NSW 2050</div>
					</div>
				</div>
				<div className="col-12 col-md-5">
					<div className="pop-semibold font-24 sub-heading">
						Submit Your Message
					</div>
					<div>
						<Form
							name="contactForm"
							// className="row"
							onFinish={handleSubmit}
							fields={formFields}
						>
							<Row gutter={10}>
								<Col xs={24} lg={12}>
									<Form.Item
										// className="col-12 col-md-6"
										name="firstName"
										rules={[
											{
												required: true,
												message: "Please enter your first name",
											},
										]}
									>
										<Input placeholder="First Name" />
									</Form.Item>
								</Col>
								<Col xs={24} lg={12}>
									<Form.Item
										// className="col-12 col-md-6"
										name="lastName"
										rules={[
											{
												required: true,
												message: "Please enter your last name",
											},
										]}
									>
										<Input placeholder="Last Name" />
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={10}>
								<Col xs={24} lg={12}>
									<Form.Item
										// className="col-12 col-md-6"
										name="email"
										rules={[
											{ required: true, message: "Please enter your email" },
										]}
									>
										<Input placeholder="Email Address" />
									</Form.Item>
								</Col>
								<Col xs={24} lg={12}>
									<Form.Item
										// className="col-12 col-md-6"
										name="phoneNumber"
										rules={[
											{
												required: true,
												message: "Please enter your phone number",
											},
										]}
									>
										<Input placeholder="Phone Number" />
									</Form.Item>
								</Col>
							</Row>
							<Form.Item
								className="col-12"
								name="subject"
								rules={[
									{ required: true, message: "Please enter the subject" },
								]}
							>
								<Input placeholder="Subject" />
							</Form.Item>
							<Form.Item
								className="col-12"
								name="message"
								rules={[
									{ required: true, message: "Please enter your message" },
								]}
							>
								<Input.TextArea rows={4} placeholder="Your Message" />
							</Form.Item>
							<Button
								className="curved-btn white orange-bg"
								type="primary"
								htmlType="submit"
							>
								Send
							</Button>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactView;
