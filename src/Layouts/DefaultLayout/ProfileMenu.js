import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

import DropdownMenu from "../../Components/Generic/DropdownMenu";

const ProfileMenu = () => {
  const options = [
		{
			label: (
				<div className="d-flex align-items-center">
					<div>
						<img src={require("../../assets/images/people_grey.svg")} />
					</div>
					Profile
				</div>
			),
			link: "/profile",
		},
		{
			label: (
				<div className="d-flex align-items-center">
					<div>
						<img src={require("../../assets/images/loggggggg.svg")} />
					</div>
					Logout
				</div>
			),
			link: "",
		},
	];
  const user = {
    name: "Danny K",
    email: "aVeryVeryVeryVeryVeryVeryLongEmail@email.com"
  };
  const history = useHistory();
  
  const logout = () => {
    console.log("logout clicked");
    history.push("/login");
  };

  return (
		<Fragment>
			<DropdownMenu
				options={options}
				onLogoutClick={logout}
				user={user}
			>
				<div className="profile">
					<div className="profile-img-name d-flex align-items-center">
						<div className="avatar mr-2">
							<img src={require("../../assets/images/avatar@2x.png")} />
						</div>
						<span className="white pop-medium font-14 avatar-name">Danny</span>
					</div>
				</div>
			</DropdownMenu>
		</Fragment>
	);
};

export default ProfileMenu;