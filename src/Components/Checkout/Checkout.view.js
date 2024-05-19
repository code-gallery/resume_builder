import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";

import Dropdown from "../Generic/Dropdown";
import { Link } from "react-router-dom";

const cartItems = [1, 2, 3, 4, 5, 6];

const CheckoutView = ({
	billingInfo,
	initialShippingInfo,
	shippingInfo,
	setShippingInfo,
	isBillingShippingSectionActive,
	setIsBillingShippingSectionActive,
	isShippingAddressSameAsBillingAddress,
	setIsShippingAddressSameAsBillingAddress,
	// showShippingDetailsForm,
	// setShowShippingDetailsForm,
	handleSection1Submit,
	isBillingShippingSectionSubmitted,
	isOrderReviewSectionActive,
	isOrderReviewSectionSubmitted,
	handleOrderReviewSectionSubmit,
	isPaymentSectionActive,
	handlePaymentSectionSubmit,
	activateBillingShippingSection,
	activateOrderReviewSection,
}) => {
	// const [form] = Form.useForm();

	const formFields = Object.keys(shippingInfo).map((key) => {
		return {
			name: key,
			value: shippingInfo[key],
		};
	});

	const onChange = (e) => {
		console.log("radio checked", e.target.value);
		if (e.target.value === true) {
			// setShippingInfo(billingInfo);
			setIsShippingAddressSameAsBillingAddress(e.target.value);
		} else {
			setIsShippingAddressSameAsBillingAddress(e.target.value);
			// form
			// 	.validateFields()
			// 	.then((res) => {
			// 		console.log("success", res);
			// 		setIsShippingAddressSameAsBillingAddress(e.target.value);
			// 	})
			// 	.catch((err) => console.log("error", err));
		}
	};

	const suffixIconForDropdown = () => (
		<span className="caret">
			<img src={require("../../assets/images/arrow_black-down.svg")} />
		</span>
	);
	const handleSelectCountryChange = (country) => {
		console.log(`selected country: ${country}`);
	};

	return (
		<div id="checkout">
			<div className="font-30 orange pop-semibold col-12 page-title mt-2 mb-2">
				Checkout
			</div>
			<div className="col-lg-8 col-sm-12">
				<section className="checkout-section checkout-billing white-bg mb-3">
					<div>
						<div
							className={`col-12 justify-content-between mt-3 mb-4 section-title nopadding-left nopadding-right`}
						>
							<div className="font-24 pop-semibold">1. Billing Information</div>
							{!isBillingShippingSectionSubmitted && (
								<div className="font-12 orange pop-medium">
									* Required Fields
								</div>
							)}
							{isBillingShippingSectionSubmitted &&
								!isBillingShippingSectionActive && (
									<Link
										className="corner-position"
										to=""
										onClick={activateBillingShippingSection}
									>
										Edit
									</Link>
								)}
						</div>
						{isBillingShippingSectionActive ? (
							<>
								{!isBillingShippingSectionSubmitted && (
									<>
										<div>
											<div className="font-14 pop-medium col-12">
												Tony Stark
											</div>
											<div className="font-14 pop-medium col-12">
												billing@starkindustries.com
											</div>
											<div className="font-14 pop-medium col-12">
												Stark Industries
											</div>
											<div className="font-14 pop-medium col-12">
												Stark Mansion, Sea-side cliff,
											</div>
											<div className="font-14 pop-medium col-12">
												Malibu, California 90265
											</div>
											<div className="font-14 pop-medium col-12">USA</div>
											<div className="font-14 pop-medium col-12 mb-3">
												9876543210
											</div>
										</div>
										<div className="col-md-12 col-sm-12">
											<Radio.Group
												className="mt-2 mb-4"
												onChange={onChange}
												value={isShippingAddressSameAsBillingAddress}
											>
												<Radio value={true}>Ship to this address</Radio>
												<Radio value={false}>Ship to different address</Radio>
											</Radio.Group>
										</div>
										<Form
											className="row"
											// form={shippingInfo}
											name="shippingDetails"
											// initialValues={shippingInfo}
											fields={formFields}
											onFinish={handleSection1Submit}
											// onFinishFailed={(err) => formError(0)}
										>
											{!isShippingAddressSameAsBillingAddress && (
												<>
													<div className="col-md-6 col-sm-12 common-fields input-fields">
														<div className="font-14 mb-2">First Name*</div>
														<Form.Item
															name="shippingInfoFirstName"
															rules={[
																{
																	required: true,
																	message: "Please enter your first name",
																},
															]}
														>
															<Input placeholder="First Name" />
														</Form.Item>
													</div>
													<div className="col-md-6 col-sm-12 common-fields input-fields">
														<div className="font-14 mb-2">Last Name*</div>
														<Form.Item
															name="shippingInfoLastName"
															rules={[
																{
																	required: true,
																	message: "Please enter your last name",
																},
															]}
														>
															<Input placeholder="Last Name" />
														</Form.Item>
														{/* <input type="text" placeholder="Last Name" /> */}
													</div>
													<div className="col-md-6 col-sm-12 common-fields input-fields">
														<div className="font-14 mb-2">Company*</div>
														<Form.Item
															name="shippingInfoCompany"
															rules={[
																{
																	required: true,
																	message: "Please enter company's name",
																},
															]}
														>
															<Input placeholder="Company" />
														</Form.Item>
														{/* <input type="text" placeholder="Company" /> */}
													</div>
													<div className="col-md-6 col-sm-12 common-fields input-fields">
														<div className="font-14 mb-2">Email*</div>
														<Form.Item
															name="shippingInfoEmail"
															rules={[
																{
																	required: true,
																	message: "Please enter your email",
																},
																{
																	type: "email",
																	message: "Please enter a valid email",
																},
															]}
														>
															<Input placeholder="Email" />
														</Form.Item>
														{/* <input type="text" placeholder="Email" /> */}
													</div>
													<div className="col-md-6 col-sm-12 common-fields input-fields">
														<div className="font-14 mb-2">Address*</div>
														<Form.Item
															name="shippingInfoAddressField1"
															rules={[
																{
																	required: true,
																	message: "Please enter your address",
																},
															]}
														>
															<Input placeholder="Address" />
														</Form.Item>
														{/* <input type="tel" placeholder="Address" /> */}
													</div>
													<div className="col-md-6 col-sm-12 common-fields input-fields">
														<div className="font-14 mb-2">Street Address 2</div>
														<Form.Item
															name="shippingInfoAddressField2"
															rules={[
																{
																	required: true,
																	message: "Please enter your address",
																},
															]}
														>
															<Input placeholder="Street Address 2" />
														</Form.Item>
														{/* <input type="text" placeholder="Street Address 2" /> */}
													</div>
													<div className="col-md-6 col-sm-12 common-fields input-fields">
														<div className="font-14 mb-2">City*</div>
														<Form.Item
															name="shippingInfoCity"
															rules={[
																{
																	required: true,
																	message: "Please enter your city",
																},
															]}
														>
															<Input placeholder="City" />
														</Form.Item>
														{/* <input type="email" placeholder="City" /> */}
													</div>
													<div className="col-md-6 col-sm-12 common-fields input-fields">
														<div className="font-14 mb-2">State*</div>
														<Form.Item
															name="shippingInfoState"
															rules={[
																{
																	required: true,
																	message: "Please enter your State",
																},
															]}
														>
															<Input placeholder="State" />
														</Form.Item>
														{/* <input type="text" placeholder="State" /> */}
													</div>
													<div className="col-md-6 col-sm-12 common-fields input-fields">
														<div className="font-14 mb-2">Postal Code*</div>
														<Form.Item
															name="shippingInfoPostalCode"
															rules={[
																{
																	required: true,
																	message: "Please enter your postal code",
																},
															]}
														>
															<Input placeholder="Postal Code" />
														</Form.Item>
														{/* <input type="email" placeholder="Postal Code" /> */}
													</div>
													<div className="col-md-6 col-sm-12 common-fields input-fields">
														<div className="font-14 mb-2">Country*</div>
														<Form.Item
															name="shippingInfoCountry"
															rules={[
																{
																	required: true,
																	message: "Please select your country",
																},
															]}
														>
															<Dropdown
																className="country-select"
																width={"100%"}
																suffixIcon={suffixIconForDropdown}
																options={[
																	{ label: "Australia", value: "australia" },
																	{
																		label: "New Zealand",
																		value: "newZealand",
																	},
																]}
																defaultValue={"Select Country"}
																handleDropdownChange={handleSelectCountryChange}
															/>
														</Form.Item>
													</div>
													<div className="col-md-6 col-sm-12 common-fields input-fields">
														<div className="font-14 mb-2">Phone Number*</div>
														<Form.Item
															name="shippingInfoPhoneNumber"
															rules={[
																{
																	required: true,
																	message: "Please enter your phone number",
																},
															]}
														>
															<Input placeholder="Phone Number" />
														</Form.Item>
														{/* <input type="email" placeholder="Phone Number" /> */}
													</div>
												</>
											)}
											{!isBillingShippingSectionSubmitted && (
												<div className="col-md-12 mt-3 mb-5">
													<Button
														type="primary"
														htmlType="submit"
														className="blue-bg white curved-btn"
													>
														Continue
													</Button>
												</div>
											)}
										</Form>
									</>
								)}
							</>
						) : (
							<>
								{isBillingShippingSectionSubmitted && (
									<div className="row nomargin-left nomargin-right">
										<div>
											<div className="font-14 pop-semibold col-12">
												Billing Address
											</div>
											<div className="font-14 pop-medium col-12">
												{billingInfo.billingInfoFirstName}{" "}
												{billingInfo.billingInfoLastName}
											</div>
											<div className="font-14 pop-medium col-12">
												{billingInfo.billingInfoEmail}
											</div>
											<div className="font-14 pop-medium col-12">
												{billingInfo.billingInfoCompany}
											</div>
											<div className="font-14 pop-medium col-12">
												{billingInfo.billingInfoAddressField1},{" "}
												{billingInfo.billingInfoAddressField2},
											</div>
											<div className="font-14 pop-medium col-12">
												{billingInfo.billingInfoCity},{" "}
												{billingInfo.billingInfoState}{" "}
												{billingInfo.billingInfoPostalCode}
											</div>
											<div className="font-14 pop-medium col-12">
												{billingInfo.billingInfoCountry}
											</div>
											<div className="font-14 pop-medium col-12 mb-3">
												{billingInfo.billingInfoPhoneNumber}
											</div>
										</div>
										{!isShippingAddressSameAsBillingAddress && (
											<>
												<div>
													<div className="font-14 pop-semibold col-12">
														Shipping Address
													</div>
													<div className="font-14 pop-medium col-12">
														{shippingInfo.shippingInfoFirstName}{" "}
														{shippingInfo.shippingInfoLastName}
													</div>
													<div className="font-14 pop-medium col-12">
														{shippingInfo.shippingInfoEmail}
													</div>
													<div className="font-14 pop-medium col-12">
														{shippingInfo.shippingInfoCompany}
													</div>
													<div className="font-14 pop-medium col-12">
														{shippingInfo.shippingInfoAddressField1},{" "}
														{shippingInfo.shippingInfoAddressField2},
													</div>
													<div className="font-14 pop-medium col-12">
														{shippingInfo.shippingInfoCity},{" "}
														{shippingInfo.shippingInfoState}{" "}
														{shippingInfo.shippingInfoPostalCode}
													</div>
													<div className="font-14 pop-medium col-12">
														{shippingInfo.shippingInfoCountry}
													</div>
													<div className="font-14 pop-medium col-12 mb-3">
														{shippingInfo.shippingInfoPhoneNumber}
													</div>
												</div>
											</>
										)}
									</div>
								)}
							</>
						)}
					</div>
				</section>
				{/* <section className="checkout-section checkout-shipping-method white-bg mb-3">
					<div>
						<span className="lblue font-24 pop-medium">2. Shipping Method</span>
					</div>
				</section> */}
				<section className="checkout-section checkout-order-review white-bg mb-3">
					<div className="d-flex justify-content-between">
						<div
							className={`font-24 pop-semibold section-title${
								!isOrderReviewSectionSubmitted && !isOrderReviewSectionActive
									? " lblue"
									: ""
							}`}
						>
							2. Order Review
						</div>
						{isOrderReviewSectionSubmitted && !isOrderReviewSectionActive && (
							<Link to="" onClick={activateOrderReviewSection}>
								Edit
							</Link>
						)}
					</div>
					{isOrderReviewSectionActive && !isOrderReviewSectionSubmitted && (
						<>
							<div
								className={`col-12 ${
									cartItems.length > 5 ? "" : "col-md-9"
								} d-flex flex-column order-review-details mt-3 nopadding-left nopadding-right`}
							>
								<div
									className={`row nomargin-left nomargin-right ${
										cartItems.length > 5 ? "scrollable" : ""
									}`}
								>
									{cartItems.map((item) => (
										<div
											key={item}
											className={`col-12 ${
												cartItems.length > 5 ? "col-md-6" : ""
											} d-flex order-items mb-3 nopadding-left nopadding-right`}
										>
											<div
												className={`col-12 ${
													cartItems.length > 5 ? "col-md-4" : "col-md-3"
												} image-container mb-2`}
											>
												<img
													className="w-100"
													src={require("../../assets/images/kkk.png")}
												/>
											</div>
											<div
												className={`col-12 ${
													cartItems.length > 5 ? "col-md-9" : "col-md-8"
												}`}
											>
												<span className="pop-semibold blok_info all_d_two font-16">
													John Deere Nordic Jacket
												</span>
												<span className="pop-medium d-block  blok_info all_d_two font-16">
													118085
												</span>
												<span className="pop-medium d-block  blok_info all_d_two font-16">
													AU$119.97
												</span>
												<span className="pop-medium d-block  blok_info all_d_two font-16">
													Quantity: 1
												</span>
											</div>
										</div>
									))}
								</div>
								<div className="col-12">
									<span className="pop-semibold font-16 mt-3">
										Order Summary
									</span>
									<div className="subtotal-price-details font-16">
										<div className="d-flex justify-content-between align-items-end">
											<div className="pop-medium">Subtotal</div>
											<div className="lato-regular">AU$120.00</div>
										</div>
										<div className="d-flex justify-content-between align-items-end">
											<div className="pop-medium">Minimum Order Fee</div>
											<div className="lato-regular">AU$20.00</div>
										</div>
										<div className="d-flex justify-content-between align-items-end">
											<div className="pop-medium">Shipping Cost</div>
											<div className="lato-regular">AU$1.20</div>
										</div>
									</div>
									<div className="mt-2 total-price-details font-16">
										<div className="d-flex justify-content-between align-items-end">
											<div className="pop-medium">Grand Total Excl. Tax</div>
											<div className="lato-regular">AU$141.20</div>
										</div>
										<div className="d-flex justify-content-between align-items-end">
											<div className="pop-medium">Tax</div>
											<div className="lato-regular">AU$14.12</div>
										</div>
										<div className="d-flex justify-content-between align-items-end">
											<div className="pop-medium">Grand Total Incl. Tax</div>
											<div className="lato-regular">AU$155.32</div>
										</div>
									</div>
								</div>
							</div>
							<Button
								// type="primary"
								htmlType="button"
								className="blue-bg white curved-btn mt-4"
								onClick={handleOrderReviewSectionSubmit}
							>
								Continue
							</Button>
						</>
					)}
					{!isOrderReviewSectionActive && isOrderReviewSectionSubmitted && (
						<>
							<div className="col-12 col-md-9 d-flex flex-column order-review-details mt-3 nopadding-left nopadding-right">
								<div
									className={`${cartItems.length > 5 ? "row scrollable" : ""}`}
								>
									{cartItems.map((item) => (
										<div key={item} className="d-flex order-items mb-3">
											<div className="col-12 col-md-9">
												<span className="pop-semibold blok_info all_d_two font-16">
													John Deere Nordic Jacket
												</span>
												<span className="pop-medium d-block  blok_info all_d_two font-16">
													118085
												</span>
												<span className="pop-medium d-block  blok_info all_d_two font-16">
													AU$119.97
												</span>
												<span className="pop-medium d-block  blok_info all_d_two font-16">
													Quantity: 1
												</span>
											</div>
										</div>
									))}
								</div>
							</div>
						</>
					)}
				</section>
				<section className="checkout-section checkout-payment-details white-bg mb-3">
					<div
						className={`font-24 pop-medium section-title${
							!isPaymentSectionActive ? " lblue" : ""
						}`}
					>
						3. Payment Information
					</div>
					<div>
						{isPaymentSectionActive && (
							<>
								<div className="col-12 col-md-8 nopadding-left nopadding-right">
									<Form
										name="paymentDetails"
										onFinish={handlePaymentSectionSubmit}
									>
										<div className="col-12 font-14 pop-medium mb-2">
											CREDIT CARD NUMBER
										</div>
										<div className="col-12 common-fields input-fields">
											<Form.Item
												name="paymentInfoCreditCardNumber"
												rules={[
													{
														required: true,
														message: "Please enter your credit card number",
													},
												]}
											>
												<Input placeholder="Credit card number" />
											</Form.Item>
										</div>
										<div className="col-12">
											<div className="d-flex flex-wrap">
												<div className="col-12 col-md-8 mb-2 mt-2 nopadding-left nopadding-right">
													<div className="font-14 pop-medium">EXPIRATION</div>
													<div className="common-fields input-fields">
														<Form.Item
															name="paymentInfoExpiry"
															rules={[
																{
																	required: true,
																	message:
																		"Please enter your credit card's expiry details",
																},
															]}
														>
															<div className="d-flex">
																<div className="col-6 nopadding-left">
																	<Input placeholder="MM" />
																</div>
																<div className="col-6 nopadding-left">
																	<Input placeholder="YY" />
																</div>
															</div>
														</Form.Item>
														{/* <input type="text" placeholder="YY" /> */}
													</div>
												</div>
												<div className="col-6 col-md-4 mb-2 mt-2 nopadding-left nopadding-right text-align-right">
													<div className="font-14 pop-medium">
														Security Code
													</div>
													<div className="common-fields input-fields">
														<Form.Item
															name="paymentInfoCVC"
															rules={[
																{
																	required: true,
																	message:
																		"Please enter your credit card's CVC",
																},
															]}
														>
															<div className="d-flex justify-content-end">
																<div className="col-12 col-md-6 nopadding-left nopadding-right">
																	<Input className="col-12" placeholder="CVC" />
																</div>
															</div>
														</Form.Item>
													</div>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-6 mt-3 mb-5">
											<Button
												type="primary"
												htmlType="submit"
												className="white curved-btn"
											>
												Place Order
											</Button>
										</div>
									</Form>
								</div>
							</>
						)}
					</div>
				</section>
			</div>
		</div>
	);
};

export default CheckoutView;
