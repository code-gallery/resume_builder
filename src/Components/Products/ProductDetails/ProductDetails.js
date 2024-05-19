import React from "react";
import { useHistory } from "react-router-dom";

import ProductDetailsView from "./ProductDetails.view";

const ProductDetailsComponent = (props) => {
	const history = useHistory();
	
	const addToCart = () => {
		history.push("/cart");
	};
	
	return <ProductDetailsView addToCart={addToCart} />;
};
export default ProductDetailsComponent;
