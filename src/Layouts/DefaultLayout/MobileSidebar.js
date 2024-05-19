import React, { Fragment } from "react";
import {Link, withRouter} from "react-router-dom";
import {companyNavs} from "./nav";

const MobileSidebar = ({
	isMenuCollapsed,
	location,
	collapseMobileSidebar,
}) => {
	const getNavLinkClass = (matchKey) => {
		return location.pathname.includes(matchKey) ? "current-item" : "";
	};
	return (
		<Fragment>
			<div
				className={`left-panel blue-bg side-panel mobile ${
					isMenuCollapsed ? "collapsed" : null
				}`}
			>
				<ul className="list-unstyled">
					{companyNavs.map((nav, index) => (
						<li key={index} className={getNavLinkClass(nav.matchKey)}>
							<Link
								to={nav.url}
								className="d-flex align-items-center"
								onClick={collapseMobileSidebar}
							>
								<span className="menu-icon">
									<img
										src={
											getNavLinkClass(nav.matchKey) === "current-item"
												? nav.activeIcon
												: nav.icon
										}
										alt=""
									/>
								</span>
								<span className="menu-title">{nav.name}</span>
							</Link>
						</li>
					))}
					<li className="logout">
						<Link to="/login">
							<span className="menu-icon">
								<img src={require("../../assets/images/logout.svg")} alt="" />
							</span>
							<span className="menu-title">Logout</span>
						</Link>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};

export default withRouter(MobileSidebar);