import React, { Fragment, Suspense } from "react";

import ProductsListView from "./ProductsList.view";
import "./productsList.css";

const CompanyBanner = React.lazy(() =>
	import("../../../Layouts/DefaultLayout/CompanyBanner")
);

const ProductsListComponent = (props) => {
	return (
		<Fragment>
			<Suspense>
				<CompanyBanner />
			</Suspense>
			<ProductsListView />
		</Fragment>
	);
};
export default ProductsListComponent;
