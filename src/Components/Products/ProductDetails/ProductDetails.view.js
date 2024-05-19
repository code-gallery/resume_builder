import React, { Fragment, useState, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import { Table } from "antd";

import Product from "../ProductsList/Product";
import "./productDetails.css";

const statusData = [
	{
		key: 1,
		title: "In Production",
		xs: 0,
		s: 0,
		m: 0,
		l: 0,
		xl: 0,
		xxl: 0,
	},
	{
		key: 2,
		title: "In Stock",
		xs: 0,
		s: 0,
		m: 0,
		l: 0,
		xl: 0,
		xxl: 0,
	},
	{
		key: 3,
		title: "Order Qty",
		xs: <input className="lblue-tile" defaultValue="10" />,
		s: <input className="lblue-tile" defaultValue="25" />,
		m: <input className="lblue-tile" defaultValue="10" />,
		l: <input className="lblue-tile" defaultValue="30" />,
		xl: <input className="lblue-tile" defaultValue="5" />,
		xxl: <input className="lblue-tile" defaultValue="9" />,
	},
];

const sizeChartData = [
	{
		key: 1,
		title: "Half chest (cm)",
		xs: 43,
		s: 45.5,
		m: 48,
		l: 50.5,
		xl: 53,
		xxl: 55.5,
	},
];

const sizeColumns = [
	{
		title: "XS",
		dataIndex: "xs",
		key: "xs",
	},
	{
		title: "S",
		dataIndex: "s",
		key: "s",
	},
	{
		title: "M",
		dataIndex: "m",
		key: "m",
	},
	{
		title: "L",
		dataIndex: "l",
		key: "l",
	},
	{
		title: "XL",
		dataIndex: "xl",
		key: "xl",
	},
	{
		title: "2XL",
		dataIndex: "xxl",
		key: "xxl",
	},
];

const sizeChartColumns = [
	{
		title: "Size",
		dataIndex: "title",
		key: "title",
	},
	...sizeColumns,
];

const statusColumns = [
	{
		title: "",
		dataIndex: "title",
		key: "title",
	},
	...sizeColumns,
];

const ProductDetailsView = ({ addToCart }) => {
	const productImages = [
		{
			id: 1,
			image: require("../../../assets/images/kkk.png"),
		},
		{
			id: 2,
			image: "https://picsum.photos/700/723",
		},
		{
			id: 3,
			image: "https://picsum.photos/705/728",
		},
		{
			id: 4,
			image: "https://picsum.photos/695/718",
		},
		{
			id: 5,
			image: "https://picsum.photos/690/713",
		},
		{
			id: 6,
			image: "https://picsum.photos/710/733",
		},
		{
			id: 7,
			image: "https://picsum.photos/685/708",
		},
	];

	const { categoryId } = useParams();
	const [selectedProductImage, selectProductImage] = useState(productImages[0]);

	const getSelectedImageClass = (id) => {
		return selectedProductImage.id === id ? "active" : "";
	};
	
	return (
		<Fragment>
			<div className="products-module_product-details">
				<div className="product-breadcrumbs pop-medium font-14 mt-2 mb-2">
					<span className="lblue">
						<Link to="/product-categories">Categories</Link>
					</span>
					<span className="product-breadcrumb lblue">
						<Link to={`/product-categories/${categoryId}/products`}>
							Products
						</Link>{" "}
					</span>
					<span className="product-breadcrumb orange short-text">
						John Deere Nordic Jacket
					</span>
				</div>
				<div className="row mt-5">
					<div className="col-md-5 left-section">
						<div className="d-flex flex-column align-items-center">
							<div className="selected-image mb-3">
								<img src={selectedProductImage.image} />
							</div>
							<div className="images-list-container d-flex justify-content-center">
								<div className="images-list d-flex justify-content-start align-items-center mb-2">
									{productImages.map((image) => (
										<img
											className={`pointer-cursor ${getSelectedImageClass(
												image.id
											)}`}
											src={image.image}
											onMouseEnter={() => selectProductImage(image)}
											onTouchStart={() => selectProductImage(image)}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-7 right-section blue">
						<div className="font-35 orange pop-semibold mt-1 mb-3">
							John Deere Nordic Jacket
						</div>
						<div className="font-38 pop-medium mb-4">AU$ 119.97</div>
						<div className="font-18 mb-4">
							<span className="pop-bold">Product Code: </span>
							<span className="pop-light">NZJOH348</span>
						</div>
						<div className="mb-3">
							<div className="pop-bold font-18">Description</div>
							<div className="pop-light font-16">
								Extremely lightweight 140gsm cut and sewn men’s sports t-shirt
								with raglan sleeves. It is manufactured from moisture wicking
								polyester mesh which is breathable, fast-drying and perfect for
								dry fit activewear. Binding on the collar and arms add strength
								and structure to the garment. The t-shirt is a European fit and
								is available in seven sizes.
							</div>
						</div>
						<div className="mb-3">
							<div className="pop-bold font-18">Features</div>
							<ul className="unordered-list pop-light font-16">
								<li>100% polyester with TPU coating</li>
								<li>Wind resistent</li>
								<li>Breathable</li>
								<li>Showerproof</li>
								<li>Classic fit</li>
								<li>100% polyester with TPU coating</li>
								<li>Wind resistent</li>
								<li>Breathable</li>
								<li>Showerproof</li>
								<li>Classic fit</li>
							</ul>
						</div>
						<div className="mb-3">
							<div className="pop-bold font-18">Decoration</div>
							<div className="pop-light font-16">
								John Deere Contemporary logo embroidered on the front left chest
							</div>
							<div className="pop-light font-16">
								Colour: Charcoal and Light Grey
							</div>
							<div className="pop-light font-16">Size: Apx 54.4mm X 82mm</div>
						</div>
						<div className="mb-3">
							<div className="pop-bold font-18">Colour</div>
							<ul className="unordered-list pop-light font-16">
								<li>Black</li>
							</ul>
						</div>
						<div className="mb-3">
							<div className="pop-bold font-18">Sizing Chart</div>
							<Table
								dataSource={sizeChartData}
								columns={sizeChartColumns}
								bordered
								pagination={false}
							/>
						</div>
						<div className="mb-3">
							<div className="pop-medium font-18">AUD DBP ex. GST</div>
							<div className="pop-light font-16">$119.97</div>
						</div>
						<div className="mb-3">
							<div className="pop-medium font-18">AUD RRP inc. GST</div>
							<div className="pop-light font-16">$219.95</div>
						</div>
						<div className="mb-3">
							<div className="pop-medium font-18">
								NZ DBP inc. GST
								<span>
									<i>(Subject to exchange rate fluctuations)</i>
								</span>
							</div>
							<div className="pop-light font-16">$131.97</div>
						</div>
						<div className="mb-3">
							<div className="pop-medium font-18">
								NZ RRP inc. GST
								<span>
									<i>(Subject to exchange rate fluctuations)</i>
								</span>
							</div>
							<div className="pop-light font-16">$241.95</div>
						</div>
						<Table
							className="mt-5"
							dataSource={statusData}
							columns={statusColumns}
							bordered
							pagination={false}
						/>
						<div className="actions mt-5 mb-5 d-flex">
							<button
								type="submit"
								className="mr-2 font-18 white orange-bg curved-btn"
								onClick={addToCart}
							>
								Add To Cart
							</button>
							<button
								type="submit"
								className="font-18 white blue-bg curved-btn "
							>
								Checkout
							</button>
						</div>
					</div>
				</div>
				<Suspense>
					<div className="font-35 blue pop-semibold page_two_titles mb-4">
						Similar Products
					</div>
					<div className="row similar-products">
						{[1, 2, 3, 4, 5].map((product) => (
							<Product categoryId={categoryId} productId={product} />
						))}
					</div>
				</Suspense>
			</div>
		</Fragment>
	);
};

export default ProductDetailsView;