import React from 'react';
import { Table } from "antd";

// TODO: create a similar mock array for refund
const exchangeOrderDetailsColumns = [
	{
		title: "Item#",
		dataIndex: "productId",
		key: "productId",
	},
	{
		title: "Product Name",
		dataIndex: "productName",
		key: "productName",
	},
	{
		title: "Size",
		dataIndex: "size",
		key: "size",
	},
	{
		title: "Color",
		dataIndex: "color",
		key: "color",
	},
	{
		title: "Qty Returning",
		dataIndex: "quantityReturning",
		key: "quantityReturning",
	},
	{
		title: "New exchange size",
		dataIndex: "newExchangeSize",
		key: "newExchangeSize",
	},
	{
		title: "New exchange color",
		dataIndex: "newExchangeColor",
		key: "newExchangeColor",
	},
	{
		title: "Reason for exchange",
		dataIndex: "reasonForExchange",
		key: "reasonForExchange",
	},
];
const scroll = { x: "950px" };


const ReturnOrderDetailsView = ({ title, orderDetails }) => {
	return (
		<>
			<h2 className="pop-semibold font-35 orange mt-3 mb-3">{title}</h2>
			<div
				id="return-order-details"
				className="company-table ompany-table-new pt-3"
			>
				<Table
					dataSource={orderDetails}
					columns={exchangeOrderDetailsColumns}
					scroll={scroll}
					rowSelection={true}
				/>
			</div>
		</>
	);
};

export default ReturnOrderDetailsView;