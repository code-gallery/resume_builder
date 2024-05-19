import React, { Suspense, useState } from "react";
import { Link, Route } from "react-router-dom";

import OrderHistoryView from "./OrderHistory.view";
import "./orderHistory.css";
import { utils } from "../../../utils";
const CompanyBanner = React.lazy(() =>
  import("../../../Layouts/DefaultLayout/CompanyBanner")
);
const RequestModal = React.lazy(() => import("../RequestModal/RequestModal"));

const ordersDataSource = [
	{
		key: 1,
		orderId: (
			<Link to="" className="link">
				1234
			</Link>
		),
		orderDate: (
			<div>
				<div>{utils.formatDateDDMMYYYY(new Date())}</div>
				<div>{utils.formatTime12HHMM(new Date())}</div>
			</div>
		),
		orderValue: "0.00",
		status: (
			<div>
				<span>
					<img
						src={require("../../../assets/images/pending.svg")}
						className="icon"
					/>
				</span>{" "}
				Pending
			</div>
		),
		invoiceLink: (
			<>
				<img
					src={require("../../../assets/images/grey-menu.svg")}
					className="icon"
				/>
				<Link to="" className="link">
					View invoice
				</Link>
			</>
		),
		request: <Link to="/order-history/1234/request" className="link">Request</Link>, //<div className="link" onClick={() => console.log("open popup")}>Request</div>,
	},
	{
		key: 2,
		orderId: (
			<Link to="" className="link">
				1234
			</Link>
		),
		orderDate: (
			<div>
				<div>{utils.formatDateDDMMYYYY(new Date())}</div>
				<div>{utils.formatTime12HHMM(new Date())}</div>
			</div>
		),
		orderValue: "0.00",
		status: (
			<div>
				<span>
					<img
						src={require("../../../assets/images/green-yes.svg")}
						className="icon"
					/>
				</span>{" "}
				Completed
			</div>
		),
		invoiceLink: (
			<>
				<img
					src={require("../../../assets/images/grey-menu.svg")}
					className="icon"
				/>
				<Link to="" className="link">
					View invoice
				</Link>
			</>
		),
		request: <Link to="/order-history/1234/request" className="link">Request</Link>, //<div className="link" onClick={() => console.log("open popup")}>Request</div>,
	},
];

const OrderHistory = () => {
  const [orders, setOrders] = useState([...ordersDataSource]);
  return (
		<>
			<Suspense>
				<Route path="/order-history/:orderId/request" component={RequestModal} />
			</Suspense>
			<Suspense>
				<CompanyBanner />
			</Suspense>
			<OrderHistoryView orders={orders} />
		</>
	);
};

export default OrderHistory;