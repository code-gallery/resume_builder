import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./product.css";

const Product = ({ className, categoryId, productId }) => {
	return (
		<Fragment>
			<Link
				to={`/product-categories/${categoryId}/products/${productId}`}
				className={`product d-flex flex-column ${className}`}
			>
				<div className={`product-image-container`}>
					<img src={require("../../../assets/images/shutt_stock.png")} />
				</div>
				<div className="d-flex justify-content-between align-items-center pt-3">
					<div>
						<div className="font-18 pop-medium text_pic_top_two">
							Lorem Ipsum
						</div>
						<div className="font-12 lblue pop-medium text_pic_top">
							99,000 AUD
						</div>
					</div>
					<div className="text_top_right">
						<div className="font-12 pop-medium discount_off">43% OFF</div>
					</div>
				</div>
			</Link>
		</Fragment>
	);
};

export default Product;