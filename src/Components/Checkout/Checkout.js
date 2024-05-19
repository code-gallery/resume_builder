import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import CheckoutView from "./Checkout.view";
import "./checkout.css";

const Checkout = () => {

	const initialBillingInfo = {
		billingInfoFirstName: "Tony",
		billingInfoLastName: "Stark",
		billingInfoCompany: "Stark Industries",
		billingInfoEmail: "billing@starkindustries.com",
		billingInfoAddressField1: "Stark Mansion",
		billingInfoAddressField2: "Sea-side cliff",
		billingInfoCity: "Malibu",
		billingInfoState: "California",
		billingInfoPostalCode: "90265",
		billingInfoCountry: "australia",
		billingInfoPhoneNumber: "9876543210"
	};
	const [billingInfo,setBillingInfo] = useState({});

	const initialShippingInfo = {
		shippingInfoFirstName: "Peter",
		shippingInfoLastName: "Parker",
		shippingInfoCompany: "Avengers",
		shippingInfoEmail: "peter@avengers.co",
		shippingInfoAddressField1: "15th Street",
		shippingInfoAddressField2: "Queens",
		shippingInfoCity: "New York City",
		shippingInfoState: "New York",
		shippingInfoPostalCode: "55555",
		shippingInfoCountry: "newZealand",
		shippingInfoPhoneNumber: "9876543211"
	};
	const [shippingInfo, setShippingInfo] = useState({});

	// const [showShippingDetailsForm, setShowShippingDetailsForm] = useState(false);
	
	const [isBillingShippingSectionActive, setIsBillingShippingSectionActive] = useState(true);
	const [
		isShippingAddressSameAsBillingAddress,
		setIsShippingAddressSameAsBillingAddress,
	] = useState(true);
	const [isBillingShippingSectionSubmitted, setIsBillingShippingSectionSubmitted] = useState(false);

	const [isOrderReviewSectionActive, setIsOrderReviewSectionActive] = useState(false);
	const [isOrderReviewSectionSubmitted, setIsOrderReviewSectionSubmitted] = useState(false);
	
	const [isPaymentSectionActive, setIsPaymentSectionActive] = useState(false);
	
	const history = useHistory();
	
	useEffect(() => {
		setBillingInfo(initialBillingInfo);
	}, []);

	useEffect(() => {
		if (isShippingAddressSameAsBillingAddress) {
			setShippingInfo(initialBillingInfo);
		} else {
			setShippingInfo(initialShippingInfo);
		}
	}, [isShippingAddressSameAsBillingAddress]);

	useEffect(() => {
		console.log("shippingInfo: ", shippingInfo);
	}, [shippingInfo]);

	const handleSection1Submit = (data) => {
		console.log(data);
		if(isShippingAddressSameAsBillingAddress) {
			setShippingInfo(billingInfo);
		}else {
			setShippingInfo(data);
		}
		setIsBillingShippingSectionSubmitted(true);
		setIsBillingShippingSectionActive(false);
		setIsOrderReviewSectionActive(true);
	};

	const activateBillingShippingSection = (e) => {
		e.preventDefault();
		setIsOrderReviewSectionActive(false);
		setIsOrderReviewSectionSubmitted(false);
		setIsPaymentSectionActive(false);
		setIsBillingShippingSectionActive(true);
		setIsBillingShippingSectionSubmitted(false);
	};

	const handleOrderReviewSectionSubmit = () => {
		setIsOrderReviewSectionSubmitted(true);
		setIsOrderReviewSectionActive(false);
		setIsPaymentSectionActive(true);
	};

	const activateOrderReviewSection = (e) => {
		e.preventDefault();
		setIsBillingShippingSectionActive(false);
		setIsPaymentSectionActive(false);
		setIsOrderReviewSectionActive(true);
		setIsOrderReviewSectionSubmitted(false);
	};
	
	const handlePaymentSectionSubmit = (data) => {
		console.log(data);
		history.push("/order-success");
	};

	return (
		<CheckoutView
			billingInfo={billingInfo}
			initialShippingInfo={initialShippingInfo}
			shippingInfo={shippingInfo}
			setShippingInfo={setShippingInfo}
			isBillingShippingSectionActive={isBillingShippingSectionActive}
			setIsBillingShippingSectionActive={setIsBillingShippingSectionActive}
			isShippingAddressSameAsBillingAddress={
				isShippingAddressSameAsBillingAddress
			}
			setIsShippingAddressSameAsBillingAddress={
				setIsShippingAddressSameAsBillingAddress
			}
			// showShippingDetailsForm={showShippingDetailsForm}
			// setShowShippingDetailsForm={setShowShippingDetailsForm}
			handleSection1Submit={handleSection1Submit}
			isBillingShippingSectionSubmitted={isBillingShippingSectionSubmitted}
			isOrderReviewSectionActive={isOrderReviewSectionActive}
			isOrderReviewSectionSubmitted={isOrderReviewSectionSubmitted}
			handleOrderReviewSectionSubmit={handleOrderReviewSectionSubmit}
			isPaymentSectionActive={isPaymentSectionActive}
			handlePaymentSectionSubmit={handlePaymentSectionSubmit}
			activateBillingShippingSection={activateBillingShippingSection}
			activateOrderReviewSection={activateOrderReviewSection}
		/>
	);
};

export default Checkout;
