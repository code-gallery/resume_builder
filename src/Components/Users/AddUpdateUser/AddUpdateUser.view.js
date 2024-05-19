import React from 'react';
import { Form, Input, Button } from "antd";

const AddUpdateUserView = ({ userId, formData, sendFormData }) => {
	return (
		<div id="add-update-user">
			<div className="font-30 orange pop-semibold mt-3 mb-4">
				{userId ? "Edit" : "Add New"} User
			</div>
			<div class="d-flex justify-content-center">
				<div class="add-update-user-form col-12 col-lg-9">
					<Form
						name="addUpdateUser"
						fields={formData}
						onFinish={(data) => sendFormData(data)}
					>
						<div class="font-24 mb-4">User Details</div>
						<div class="row">
							<div class="col-md-6 col-12">
								<div class="common-fields input-fields">
									<div class="font-14 mb-2">User Name</div>
									<Form.Item
										name="name"
										rules={[
											{ required: true, message: "Please enter User Name" },
										]}
									>
										<Input className="nomargin-bottom" placeholder="User Name" />
									</Form.Item>
								</div>
								<div class="common-fields input-fields">
									<div class="font-14 mb-2">Email</div>
									<Form.Item
										name="email"
										rules={[
											{
												required: true,
												message: "Please enter User Email",
											},
											{ type: "email", message: "Please enter valid email" },
										]}
									>
										<Input className="nomargin-bottom" placeholder="User Email" />
									</Form.Item>
								</div>
								<div class="common-fields input-fields">
									<div class="font-14 mb-2">Authorized Delivery Locations</div>
									<Form.Item
										name="authorizedDeliveryLocations"
										rules={[
											{
												required: true,
												message: "Please enter authorized delivery locations",
											},
										]}
									>
										<Input className="nomargin-bottom" placeholder="Authorized Delivery Locations" />
									</Form.Item>
								</div>
								<div class="common-fields input-fields">
									<div class="font-14 mb-2">Authorized Maximum Spend</div>
									<Form.Item
										name="authorizedMaximumSpend"
										rules={[
											{
												required: true,
												message: "Please enter authorized maximum spend",
											},
										]}
									>
										<Input className="nomargin-bottom" placeholder="Authorized Maximum Spend" />
									</Form.Item>
								</div>
								<div class="common-fields input-fields">
									<div class="font-14 mb-2">Store Credits ($)</div>
									<Form.Item
										name="storeCredits"
										rules={[
											{
												required: true,
												message: "Please enter store credits",
											},
										]}
									>
										<Input className="nomargin-bottom" placeholder="Store Credits ($)" />
									</Form.Item>
								</div>
							</div>
							<div class="col-md-6 col-lg-4 col-12 new_form">
								<div class="common-fields input-fields common-fields-22">
									<div class="font-14 mb-2">Upload user photo</div>
								</div>
								<div class="upload-area">
									<img
										src={require("../../../assets/images/upload-icon.svg")}
									/>

									<div class="font-14">Drag &amp; Drop</div>
									<div class="lblue pop-light font-10">
										your files to assets, or{" "}
										<a href="" class="pop-bold orange text-underline">
											browse
										</a>{" "}
									</div>
								</div>
							</div>
							<div class="col-md-12 mt-3 d-flex justify-content-end">
								<Button
                  type="primary"
									htmlType="submit"
									className="white curved-btn"
								>
									{userId ? "Save" : "Create"}
								</Button>
							</div>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default AddUpdateUserView;