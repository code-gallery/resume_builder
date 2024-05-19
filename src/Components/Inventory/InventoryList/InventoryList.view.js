import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";

const inventoryColumns = [
	{
		title: "Product",
		key: "product",
		render: (data) => (
			<span className="product-image">
				{data.productImage}
				<span className="pop-medium ml-2">{data.productName}</span>
			</span>
		),
	},
	{
		title: "Product #",
		dataIndex: "productId",
		key: "productId",
		render: (productId) => (
			<Link className="link" to={`product-categories/1/products/${productId}`}>
				{productId}
			</Link>
		),
	},
	{
		title: "SOH",
		dataIndex: "soh",
		key: "soh",
	},
	{
		title: "Total Value",
		dataIndex: "totalValue",
		key: "totalValue",
	},
	{
		title: "Date",
		dataIndex: "date",
		key: "date",
	},
	{
		title: "History",
		key: "history",
		render: (data) => (
			<>
				<Link to={`inventory/${data.productId}/history`}>
					<img
						src={require("../../../assets/images/history.svg")}
						className="mr-2"
					/>
					View History
				</Link>
			</>
		),
	},
];
const scroll = { x: "950px" };

const InventoryList = ({ inventory }) => {
	return (
		<div id="inventory-list">
			<h2 className="orange font-30 pop-semibold mt-3 mb-3">Inventory</h2>
			<div id="order-history" className="company-table ompany-table-new pt-3">
				<Table
					dataSource={inventory}
					columns={inventoryColumns}
					scroll={scroll}
				/>
			</div>
		</div>
	);
};

export default InventoryList;
