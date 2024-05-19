import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

import Dropdown from "../../Generic/Dropdown";
import Product from "./Product";

const ProductsListView = () => {
	const { categoryId } = useParams();
	
  const handleSelectCategoryChange = (category) => {
		console.log(`selected category: ${category}`);
  };

  const handleSelectCurrencyChange = (currency) => {
		console.log(`selected currency: ${currency}`);
  };
  
  const handleSelectSortByChange = (sortBy) => {
		console.log(`selected sortBy: ${sortBy}`);
  };
  
  const suffixIconForDropdown = () => (
		<span className="caret">
			<img src={require("../../../assets/images/white-select.svg")} />
		</span>
	);
  
  return (
		<Fragment>
			<div className="products-module_products-list">
				<div class="font-35 blue pop-semibold page_two_titles mt-4">
					Category Name{" "}
					<span class="page_two_titles_span font-24 pop-medium">
						50 Results
					</span>
				</div>
				<div class="search-ctas d-flex justify-content-between align-items-center title-bar search-ctas-i mt-5">
					<div className="d-flex align-items-center">
						<Dropdown
							className="pop-semibold white font-14 blue-bg mr-2 mb-2"
							width={190}
							suffixIcon={suffixIconForDropdown}
							options={[
								{ label: "Option 1", value: "option1" },
								{ label: "Option 2", value: "option2" },
							]}
							defaultValue={"Select Categories"}
							handleDropdownChange={handleSelectCategoryChange}
						/>
						<div class="search-div search-div-i search-div-h search-div-product mb-2">
							<form>
								<div class="input-fields position-relative">
									<input
										type="search"
										placeholder="Search Product by name or item code"
									/>
									<input type="submit" />
								</div>
							</form>
						</div>
					</div>
					<div class="ctas d-flex">
						<Dropdown
							className="pop-semibold white font-14 blue-bg mr-2"
							overlayClassName="white-bg-dropdown"
							width={190}
							suffixIcon={suffixIconForDropdown}
							options={[
								{ label: "Option 1", value: "option1" },
								{ label: "Option 2", value: "option2" },
							]}
							defaultValue={"Currency"}
							handleDropdownChange={handleSelectCurrencyChange}
						/>
						<Dropdown
							className="pop-semibold white font-14 blue-bg"
							overlayClassName="white-bg-dropdown"
							width={190}
							suffixIcon={suffixIconForDropdown}
							options={[
								{ label: "Option 1", value: "option1" },
								{ label: "Option 2", value: "option2" },
							]}
							defaultValue={"Sort by"}
							handleDropdownChange={handleSelectSortByChange}
						/>
					</div>
				</div>
				<div className="row products mt-3">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((product) => (
						<Product productId={product} categoryId={categoryId} />
					))}
				</div>
			</div>
		</Fragment>
	);
};

export default ProductsListView;