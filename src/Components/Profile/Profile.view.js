import React from "react";
// import { Link } from "react-router-dom";
import { Form, Input, Button, Col, Row } from "antd";

const ProfileView = ({
	formFields,
	handleSubmit,
	profilePicture,
	setProfilePicture,
	redirectToHome,
}) => {
	const uploadImage = (e) => {
		console.log(e.target.files[0]);
		setProfilePicture(e.target.files[0]);
	};

	return (
		<div id="profile">
			<h2 className="blue pop-semibold font-35 profile-title col-12 col-lg-11 nopadding-left pb-4 mt-4">
				Danny Wayne
			</h2>
			<div className="col-12 col-lg-10 nopadding-left nopadding-right d-flex profile-form-container">
				<div className="col-12 col-sm-2 nopadding-left mb-4 d-flex">
					<div className="profile-picture-container">
						<img
							src={
								profilePicture
									? URL.createObjectURL(profilePicture)
									: require("../../assets/images/avatar_sqaure.png")
							}
							alt="profile_picture"
						/>
						<div className="mt-2 position-relative">
							{/* <Upload {...props}> */}
							<input type="file" onChange={uploadImage} />
							<span>
								<img
									className="mr-2"
									src={require("../../assets/images/camera.svg")}
									alt="upload_icon"
								/>
							</span>
							<span className="pop-semibold">Upload Photo</span>
							{/* </Upload> */}
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-10 nopadding-right">
					<div className="white-bg profile-form">
						<div className="font-24 mb-3">Update your info</div>
						<Form
							name="contactForm"
							layout="vertical"
							onFinish={handleSubmit}
							fields={formFields}
							requiredMark={false}
						>
							<Row gutter={10}>
								<Col xs={24} lg={12}>
									<Form.Item
										name="firstName"
										label="First Name"
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
										name="lastName"
										label="Last Name"
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
										name="email"
										label="Email"
										rules={[
											{ required: true, message: "Please enter your email" },
										]}
									>
										<Input placeholder="Email Address" />
									</Form.Item>
								</Col>
								<Col xs={24} lg={12}>
									<Form.Item
										name="phoneNumber"
										label="Phone Number"
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
							<Row gutter={10}>
								<Col xs={24} lg={12}>
									<Form.Item
										name="address"
										label="Address"
										rules={[
											{ required: true, message: "Please enter your address" },
										]}
									>
										<Input placeholder="Street Address, Suburb" />
									</Form.Item>
								</Col>
								{/* <Col xs={24} lg={12}>
									<Form.Item
										name="password"
										rules={[
											{
												required: true,
												message: "Please enter your password",
											},
										]}
									>
										<Input placeholder="Password" />
									</Form.Item>
								</Col> */}
							</Row>
							<Row className="justify-content-end">
								<Button
									className="curved-btn white orange-bg mr-2"
									type="primary"
									htmlType="submit"
								>
									Save
								</Button>
								<Button className="curved-btn white blue-bg" onClick={redirectToHome}>
									Cancel
								</Button>
							</Row>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileView;
