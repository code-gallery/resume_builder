import React from 'react';
import { Table } from "antd";

const ordersColumns = [
	{
		title: "Order Number",
		dataIndex: "orderId",
		key: "orderId",
	},
	{
		title: "Date",
		dataIndex: "orderDate",
		key: "orderDate",
	},
	{
		title: "Order Value",
		dataIndex: "orderValue",
		key: "orderValue",
	},
	{
		title: "Status",
		dataIndex: "status",
		key: "status",
	},
	{
		title: "Invoice",
		dataIndex: "invoiceLink",
		key: "invoiceLink",
	},
	{
		title: "Exchange/Refund",
		dataIndex: "request",
		key: "request",
	},
];
const scroll = { x: "950px" };

const OrderHistoryView = ({ orders }) => (
	<>
		<h2 className="pop-semibold font-35 orange mt-3 mb-3">Order History</h2>
		<div id="order-history" className="company-table ompany-table-new pt-3">
			<Table dataSource={orders} columns={ordersColumns} scroll={scroll} />
		</div>
	</>
);

export default OrderHistoryView;