import React from 'react';
import { Link } from "react-router-dom";

import ProfileMenu from "./ProfileMenu";

const Header = ({toggleMenu}) => {
  return (
		<div className="header blue-bg">
			<div className="container-fluid">
				<div className="row align-items-center justify-content-between">
					<div className="col-md-6 col-sm-6">
						<div className="logo-menu d-flex align-items-center">
							<span className="menu-ham" onClick={() => toggleMenu()}>
								<img src={require("../../assets/images/hamburger-menu.svg")} />
							</span>
							<Link to="/">
								<img src={require("../../assets/images/white-logo.svg")} />
							</Link>
						</div>
					</div>
					<div className="col-md-6 col-sm-6">
						<div className="search-profile d-flex align-items-center">
							{/* <div className="search-div">
                 <a href="" className="search"><img src={require('../../assets/images/search.svg')}/></a>
               </div> */}
							<div className="notification hasnotification">
								<Link to="/cart" className="notify">
									<img src={require("../../assets/images/cart.svg")} />
								</Link>
							</div>
							<ProfileMenu />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;