import React, { Fragment, Suspense, useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { Spin } from "antd";

import { routes } from "../../routes/routes";
import { companyNavs } from "./nav";
import "../../assets/less/default_layout.css";
import MobileSidebar from "./MobileSidebar";

const Header = React.lazy(() => import("./Header"));
const SideBar = React.lazy(() => import("./SideBar"));

const DefaultContainer = () => {
  
  const deviceScreenWidth = window.screen.width;
  const isTab = deviceScreenWidth > 420 && deviceScreenWidth < 1120;
  const isMobile = deviceScreenWidth < 420;
  // console.log("isTab",isTab);
  // console.log("isMobile",isMobile);
	const [isMenuCollapsed, setIsMenuCollapsed] = useState(isTab || isMobile ? true : false);
	const toggleMenuHandler = () => {
		setIsMenuCollapsed(!isMenuCollapsed);
  };
  
  const collapseSidebar = () => {
		if(isMobile || isTab) {
      setIsMenuCollapsed(true);
    }
	};
  
	return (
		<div className="wrapper">
			<Suspense fallback={<Spin />}>
				<Header toggleMenu={toggleMenuHandler} />
			</Suspense>
			<Suspense fallback={<Spin />}>
				{!(isMobile || isTab) && <SideBar isMenuCollapsed={isMenuCollapsed} />}
			</Suspense>
			<Suspense fallback={() => <center>Loading...</center>}>
				{(isMobile || isTab) && (
					<MobileSidebar
						isMenuCollapsed={isMenuCollapsed}
						collapseMobileSidebar={collapseSidebar}
					/>
				)}
			</Suspense>
			<div
				className="main-content"
				style={{
					marginLeft: isMobile || isTab ? 0 : isMenuCollapsed ? 0 : "145px",
				}}
			>
				<div className="inner-content">
					<Suspense fallback={<Spin />}>
						<Switch>
							{routes.map((route, index) => {
								return route.component ? (
									<Route
										key={index}
										path={route.path}
										exact={!!route.exact}
										render={(props) => <route.component {...props} />}
									/>
								) : null;
							})}
							<Redirect from="/" to="/product-categories" />
						</Switch>
					</Suspense>
				</div>
			</div>
		</div>
	);
};

export default DefaultContainer;
