import React from 'react';

import Banner from "../../assets/images/redrooster.jpg";

const CompanyBanner = () => (
	<div className="bannerrr">
		<img
      className="company-logo"
			src={require("../../assets/images/redrooster_logo.jpg")}
			alt="company_logo"
		/>
		<img className="company-banner" src={Banner} alt="company_banner" />
	</div>
);

export default CompanyBanner;