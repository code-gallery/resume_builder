import React, { Fragment } from "react";
import {Link, withRouter} from "react-router-dom";
import {companyNavs} from "./nav";

const SideBar = ({isMenuCollapsed, location}) => {
  const getNavLinkClass = (matchKey) => {
    return location.pathname.includes(matchKey) ? "current-item" : "";
  }
  return (
		<Fragment>
			<div
				className={`left-panel blue-bg side-panel ${
					isMenuCollapsed ? "collapsed" : null
				}`}
			>
				<div className="header-sidebar-curve"></div>
				<ul className="list-unstyled">
					{companyNavs.map((nav, index) => (
						<li key={index} className={getNavLinkClass(nav.matchKey)}>
							<Link to={nav.url} className="d-flex align-items-center">
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
}

export default withRouter(SideBar);