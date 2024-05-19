import React from "react";
import { Table } from "antd";

const cartData = [
	{
		key: 1,
		itemCode: 118085,
		productName: <b>John Deere Nordic Jacket</b>,
		productImage: (
			<span class="product-image">
				<img src={require("../../assets/images/kkk.png")} />
			</span>
		),
		quantity: (
			<div>
				<div className="quantity">
					<button>-</button>
					<span>2</span>
					<button>+</button>
				</div>
				<div class="font-16 pop-medium text-center m-auto">Stock - 0</div>
			</div>
		),
		shipNow: 0,
		backOrder: 1,
		unitPrice: "AU$ 120.00",
		subtotal: "AU$ 120.00",
		delete: (
			<span class="cross-logo">
				<img src={require("../../assets/images/Cross.svg")} />
			</span>
		),
	},
	{
		key: 2,
		itemCode: 118085,
		productName: <b>John Deere Nordic Jacket</b>,
		productImage: (
			<span class="product-image">
				<img src={require("../../assets/images/kkk.png")} />
			</span>
		),
		quantity: (
			<div>
				<div className="quantity">
					<button>-</button>
					<span>86</span>
					<button>+</button>
				</div>
				<div class="font-16 pop-medium text-center m-auto">Stock - 0</div>
			</div>
		),
		shipNow: 0,
		backOrder: 1,
		unitPrice: "AU$ 120.00",
		subtotal: "AU$ 120.00",
		delete: (
			<span class="cross-logo">
				<img src={require("../../assets/images/Cross.svg")} />
			</span>
		),
	},
];

const Cart = ({ checkout }) => {
	const cartColumns = [
		{
			title: "Item Code",
			dataIndex: "itemCode",
			key: "itemCode",
		},
		{
			title: "Product Name",
			dataIndex: "productName",
			key: "productName",
		},
		{
			title: "Product Image",
			dataIndex: "productImage",
			key: "productImage",
		},
		{
			title: "Quantity",
			dataIndex: "quantity",
			key: "quantity",
		},
		{
			title: "Ship Now",
			dataIndex: "shipNow",
			key: "shipNow",
		},
		{
			title: "Back Order",
			dataIndex: "backOrder",
			key: "backOrder",
		},
		{
			title: "Unit Price",
			dataIndex: "unitPrice",
			key: "unitPrice",
		},
		{
			title: "Subtotal",
			dataIndex: "subtotal",
			key: "subtotal",
		},
		{
			title: "Delete",
			dataIndex: "delete",
			key: "delete",
		},
	];

	const scroll = { x: "1100px" };

	return (
		<div id="cart">
			<div className="font-30 orange pop-semibold page-title mb-3">
				Your Cart
			</div>
			<div className="company-table company-table-two company-table-three pt-40">
				<Table
					dataSource={cartData}
					columns={cartColumns}
					bordered
					pagination={false}
					scroll={scroll}
				/>
			</div>
			<div className="d-inline-block w-100 border_bott">
				<div className="d-flex justify-content-between align-items-center">
					<span className="pop-medium font-18 ml-2 orange text_underline">
						Empty Cart
					</span>
					<button type="submit" className="orange-bg white curved-btn">
						Continue Shopping
					</button>
				</div>
			</div>
			<div className="d-flex justify-content-end">
				<div>
					<div className="mt-5 pop-semibold font-24">Store Credit Code</div>
					<div className="mt-2 mb-2 font-18">
						<form className="d-flex promotion">
							<input type="text" className="white-bg mr-2" value="25568938" />
							<button type="submit" className="blue-bg white curved-btn">
								Apply
							</button>
						</form>
					</div>
					<div className="mt-5 subtotal-price-details font-18">
						<div className="d-flex justify-content-between align-items-center">
							<div className="pop-medium">Subtotal</div>
							<div className="lato-regular">AU$120.00</div>
						</div>
						<div className="d-flex justify-content-between align-items-center">
							<div className="pop-medium">Minimum Order Fee</div>
							<div className="lato-regular">AU$20.00</div>
						</div>
						<div className="d-flex justify-content-between align-items-center">
							<div className="pop-medium">Shipping Cost</div>
							<div className="lato-regular">AU$1.20</div>
						</div>
					</div>
					<div className="mt-2 total-price-details font-18">
						<div className="d-flex justify-content-between align-items-center">
							<div className="pop-medium">Grand Total Excl. Tax</div>
							<div className="lato-regular">AU$141.20</div>
						</div>
						<div className="d-flex justify-content-between align-items-center">
							<div className="pop-medium">Tax</div>
							<div className="lato-regular">AU$14.12</div>
						</div>
						<div className="d-flex justify-content-between align-items-center">
							<div className="pop-medium">Grand Total Incl. Tax</div>
							<div className="lato-regular">AU$155.32</div>
						</div>
					</div>
					<button
						type="button"
						className="mt-4 font-18 white curved-btn orange-bg w-100"
						onClick={checkout}
					>
						Proceed To Checkout
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
