import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Table } from "antd";

import Modal from "../../Generic/Modal";
import { utils } from '../../../utils';


const productHistoryDataSource = [
	{
		key: 1,
		userName: "John Doe",
		date: utils.formatDateDDMMYYYY(new Date(), "/"),
		action: "Refund",
		quantity: 399,
		value: 100,
		deliveryAddress: "Lorem Ipsum",
	},
	{
		key: 2,
		userName: "John Doe",
		date: utils.formatDateDDMMYYYY(new Date(), "/"),
		action: "Refund",
		quantity: 399,
		value: 100,
		deliveryAddress: "Lorem Ipsum",
	},
];
const productHistoryColumns = [
	{
		title: "User Name",
		dataIndex: "userName",
		key: "userName",
	},
	{
		title: "Date",
		dataIndex: "date",
		key: "date",
	},
	{
		title: "Action",
		dataIndex: "action",
		key: "action",
	},
	{
		title: "QTY",
		dataIndex: "quantity",
		key: "quantity",
	},
	{
		title: "Value",
		dataIndex: "value",
		key: "value",
	},
	{
		title: "Delivery Address",
		dataIndex: "deliveryAddress",
		key: "deliveryAddress",
	},
];
const scroll = { x: "750px" };

const ProductHistoryModal = () => {
	const { productId } = useParams();
	const history = useHistory();
	
	const [productHistory, setProductHistory] = useState([
		...productHistoryDataSource,
	]);

	const toInventory = () => {
		history.push("/inventory");
	};

  return (
		<Modal modalWillUnmount={toInventory} width="80%">
			<h2 className="pop-semibold font-30 orange">Product history</h2>
			<div id="order-history" className="company-table ompany-table-new pt-3">
				<Table
					dataSource={productHistory}
					columns={productHistoryColumns}
					pagination={false}
					scroll={scroll}
				/>
			</div>
		</Modal>
	);
};

export default ProductHistoryModal;