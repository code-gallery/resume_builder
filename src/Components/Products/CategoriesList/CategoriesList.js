import React, { Fragment, Suspense } from "react";

import CategoriesListView from "./CategoriesList.view";
import "./categoriesList.css";
const CompanyBanner = React.lazy(() =>
	import("../../../Layouts/DefaultLayout/CompanyBanner")
);

const CategoriesList = () => (
	<Fragment>
		<Suspense>
			<CompanyBanner />
		</Suspense>
		<CategoriesListView />
	</Fragment>
);

export default CategoriesList;