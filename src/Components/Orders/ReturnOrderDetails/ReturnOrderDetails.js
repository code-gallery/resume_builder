import React, { Suspense, useState } from "react";
import { Link, Route, useParams } from "react-router-dom";

import ReturnOrderDetailsView from "./ReturnOrderDetails.view";
import "./returnOrderDetails.css";
import { utils } from "../../../utils";
const CompanyBanner = React.lazy(() =>
	import("../../../Layouts/DefaultLayout/CompanyBanner")
);
const ReasonForReturnModal = React.lazy(() => import("../ReasonForReturnModal/ReasonForReturnModal"));
const NoteSavedModal = React.lazy(() => import("../NoteSavedModal/NoteSavedModal"));

const ReturnOrderDetails = () => {
	const { subRoute, orderId } = useParams();
	
	const handleInputChange = (e) => {
		console.log(e.target.value);
	};

	// TODO: create a similar mock array for refund
	const exchangeOrderDetailsDataSource = [
		{
			key: 1,
			productId: (
				<Link to="" className="link">
					1234
				</Link>
			),
			productName: "Lorem Ipsum",
			size: "Large",
			color: "Black",
			quantityReturning: (
				<input value={"1"} id={1} onChange={handleInputChange} />
			),
			newExchangeSize: "Medium",
			newExchangeColor: "White",
			reasonForExchange: (
				<Link to={`/orders/${subRoute}/1234/reason`} className="link">
					Add/Edit Note
				</Link>
			),
		},
		{
			key: 2,
			productId: (
				<Link to="" className="link">
					1234
				</Link>
			),
			productName: "Lorem Ipsum",
			size: "Large",
			color: "Black",
			quantityReturning: (
				<input value={"1"} id={2} onChange={handleInputChange} />
			),
			newExchangeSize: "Medium",
			newExchangeColor: "White",
			reasonForExchange: (
				<Link to={`/orders/${subRoute}/1234/reason`} className="link">
					Add/Edit Note
				</Link>
			),
		},
	];

	const [orderDetailsDataSource, setOrderDetailsDataSource] = useState([
		...exchangeOrderDetailsDataSource,
  ]);
  
	return (
		<>
			<Suspense>
				<Route
					exact
					path="/orders/:subRoute/:orderId/reason"
					component={ReasonForReturnModal}
					/>
				<Route
					exact
					path="/orders/:subRoute/:orderId/confirm"
					component={NoteSavedModal}
				/>
			</Suspense>
			<Suspense>
				<CompanyBanner />
			</Suspense>
			<ReturnOrderDetailsView
				title={utils.capitalize(subRoute)}
				orderDetails={orderDetailsDataSource}
			/>
		</>
	);
};

export default ReturnOrderDetails;
