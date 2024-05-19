import React, { Suspense, useState } from "react";
import { Link, Route } from "react-router-dom";

import InventoryListView from "./InventoryList.view";
import "./inventoryList.css";
// import { utils } from "../../../utils";
const CompanyBanner = React.lazy(() =>
	import("../../../Layouts/DefaultLayout/CompanyBanner")
);
const ProductHistoryModal = React.lazy(() => import("../ProductHistory/ProductHistoryModal"));

const inventoryDataSource = [
	{
		key: 1,
		productId: 1234,
		productName: "Men's Shirt",
		productImage: (
			<img
				src={require("../../../assets/images/shutt_stock.png")}
				alt="product_image"
			/>
		),
		soh: 101,
		totalValue: 100,
		date: "11/11/2020",
	},
	{
		key: 2,
		productId: 1234,
		productName: "Men's Shirt",
		productImage: (
			<img
				src={require("../../../assets/images/shutt_stock.png")}
				alt="product_image"
			/>
		),
		soh: 101,
		totalValue: 100,
		date: "11/11/2020",
	},
];

const InventoryList = () => {
  const [inventory, setInventory] = useState([...inventoryDataSource]);
	return (
		<>
			<Suspense>
				<Route
					exact
					path="/inventory/:productId/history"
					component={ProductHistoryModal}
				/>
			</Suspense>
			<Suspense>
				<CompanyBanner />
			</Suspense>
			<InventoryListView inventory={inventory} />
		</>
	);
};

export default InventoryList;