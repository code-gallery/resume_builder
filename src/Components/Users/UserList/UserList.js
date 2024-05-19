import React, { Suspense, useState } from "react";
import { useHistory } from "react-router-dom";

import UserListView from "./UserList.view";
import "./userList.css";
const CompanyBanner = React.lazy(() =>
	import("../../../Layouts/DefaultLayout/CompanyBanner")
);

const usersDataSource = [
	{
		key: 1,
		id: 1,
		name: "Name, Family Name",
		email: "email@email.com",
		profilePictureUrl: require("../../../assets/images/avatar.svg"),
		deliveryLocations: [
			{ label: "Chastwood", value: "chastwood" },
			{ label: "Location 2", value: "location2" },
			{ label: "Location 3", value: "location3" },
		],
		maximumSpendLimit: 800,
		storeCredit: 1000,
	},
	{
		key: 2,
		id: 2,
		name: "Name, Family Name",
		email: "email@email.com",
		profilePictureUrl: require("../../../assets/images/avatar.svg"),
		deliveryLocations: [
			{ label: "Chastwood", value: "chastwood" },
			{ label: "Location 2", value: "location2" },
			{ label: "Location 3", value: "location3" },
		],
		maximumSpendLimit: 800,
		storeCredit: 1000,
	},
];

const UserList = () => {
  const [users, setUsers] = useState([...usersDataSource]);

  const [searchValue, setSearchValue] = useState("");
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
	};
  
  const history = useHistory();
  const toAddUser = () => {
    history.push("/users/add");
  };
  const toEditUser = (id) => {
    history.push(`/users/${id}/edit`);
  };

  
  return (
		<>
			<Suspense>
				<CompanyBanner />
			</Suspense>
			<UserListView
				users={users}
				searchValue={searchValue}
				handleSearchInput={handleSearchInput}
				toAddUser={toAddUser}
				toEditUser={toEditUser}
			/>
		</>
	);
};

export default UserList;
