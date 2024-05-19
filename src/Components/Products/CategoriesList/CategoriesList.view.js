import React, { Fragment, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import ScrollMenu from "react-horizontal-scrolling-menu";

import Product from "../ProductsList/Product";
import avatar from "../../../assets/images/avatar-austr.png";

const CategoriesListView = (props) => {

	const MenuItem = ({ id }) => {
		return (
			<Link to={`product-categories/${id}/products`}>
				<div className="white_block">
					<div className="images_middles images_middles_products">
						<img src={avatar} />
					</div>
					<div className="icons_middles_small">
						<Link to={`product-categories/${id}/edit`}>
							<img src={require("../../../assets/images/edit-icons.svg")} />
						</Link>
					</div>
					<div className="font-18 pop-medium images_middles_text">
						{`Category Name ${id + 1}`}
					</div>
					<div className="font-12 lblue pop-medium images_middles_text">
						50 Products
					</div>
				</div>
			</Link>
		);
	};

	const Menu = (list) =>
		list.map((item, index) => {
			return <MenuItem key={index} id={index} />;
    });
  const horizontalMenuData = Menu([1, 2, 3, 4, 5, 6, 7, 8]);

	const ArrowLeft = (
		<img
			className="arrow arrow-prev"
			src={require("../../../assets/images/arrow-sides-left.svg")}
			alt="left_arrow"
		/>
	);
	const ArrowRight = (
		<img
			className="arrow arrow-next"
			src={require("../../../assets/images/arrow-right-side.svg")}
			alt="right_arrow"
		/>
	);
  
	// const [menu, setMenu] = useState(Menu());

	// const changeScroll = () => {
	// 	let style = document.body.style.overflow;
	// 	console.log(style === "hidden" ? "mouse left" : "mouse enter");
	// 	document.body.style.overflow = (style === 'hidden') ? 'auto' : 'hidden'
	// };

	return (
		<Fragment>
			<div className="products-module_category-list">
				<div className="font-35 orange pop-semibold page-title mt-3 responsivess_two">
					Red Rooster - Categories
				</div>
				<div className="search-ctas mt-5 mb-5 d-flex justify-content-between align-items-center search-ctas-i">
					<div className="search-div search-div-i search-div-h search-div-product">
						<form>
							<div className="input-fields position-relative">
								<input
									type="search"
									placeholder="Search Product by name or item code"
								/>
								<input type="submit" />
							</div>
						</form>
					</div>
				</div>
				<div
					className="align-contentt align-contentt_product"
					// onMouseEnter={changeScroll}
					// onMouseLeave={changeScroll}
				>
					<ScrollMenu
						data={horizontalMenuData}
						arrowLeft={ArrowLeft}
						arrowRight={ArrowRight}
						alignCenter={false}
						dragging={true}
						wheel={false}
						// hideArrows={true}
						// hideSingleArrow={true}
						scrollBy={4}
					/>
					{/* {[1, 2, 3, 4, 5, 6].map((category) => (
						<div className="white_block">
							<div className="images_middles images_middles_products">
								<a href="">
									<img
										src={require("../../../assets/images/avatar-austr.png")}
									/>
								</a>
							</div>
							<div className="icons_middles_small">
								<a href="">
									<img src={require("../../../assets/images/edit-icons.svg")} />
								</a>
							</div>
							<div className="font-18 pop-medium images_middles_text">
								Category Name
							</div>
							<div className="font-12 lblue pop-medium images_middles_text">
								50 Products
							</div>
						</div>
					))} */}
				</div>
				<Suspense>
					<div className="font-35 blue pop-semibold page_two_titles mb-4">
						Popular Products
					</div>
					<div className="row popular-products">
						{[1, 2, 3, 4, 5].map((product) => (
							// TODO: Category in Similar Products ??
							<Product categoryId={product} productId={product} />
						))}
					</div>
				</Suspense>
			</div>
		</Fragment>
	);
};
export default CategoriesListView;
