import React from "react";
import { Table, Input, Button } from "antd";
import Dropdown from "../../Generic/Dropdown";

const UserListView = ({
	users,
	searchValue,
	handleSearchInput,
	toAddUser,
	toEditUser,
}) => {
	const suffixIconForDropdown = () => (
		<span className="caret">
			<img src={require("../../../assets/images/arrow_black-down.svg")} />
		</span>
	);
	const handleSelectLocationChange = (country) => {
		console.log(`selected country: ${country}`);
	};

	const usersColumns = [
		{
			title: "User",
			key: "user",
			render: (data) => (
				<div className="d-flex align-items-center">
					<div className="img-container mr-2">
						<img src={data.profilePictureUrl} alt="profile_picture" />
					</div>
					<div className="d-flex flex-column">
						<div>{data.name}</div>
						<div>
							<a href={`mailto:${data.email}`} className="lblue">
								{data.email}
							</a>
						</div>
					</div>
				</div>
			),
		},
		{
			title: "Authorized Delivery Locations",
			key: "deliveryLocations",
			render: (data) => (
				<Dropdown
					options={data.deliveryLocations}
					defaultValue={
						data && data.deliveryLocations && data.deliveryLocations[0].value
					}
					suffixIcon={suffixIconForDropdown}
					handleDropdownChange={handleSelectLocationChange}
				/>
			),
		},
		{
			title: "Authorized Maximum Spend",
			dataIndex: "maximumSpendLimit",
			key: "maximumSpendLimit",
		},
		{
			title: "Store credit ($)",
			dataIndex: "storeCredit",
			key: "storeCredit",
			render: (data) => <>${data}</>,
		},
		{
			title: "Edit",
			key: "invoiceLink",
			render: (data) => (
				<Button
					className="more-curved-btn dblue edit-button"
					onClick={()=>toEditUser(data.id)}
				>
					Edit
				</Button>
			),
		},
	];
	const scroll = { x: "950px" };

	return (
		<>
			<div id="user-list">
				<div className="d-flex justify-content-between align-items-center">
					<div className="pop-semibold font-35 orange mt-3 mb-3">Users</div>
					<div className="d-flex align-items-center">
						<Input
							type="search"
							className="mb-3 mb-md-0"
							value={searchValue}
							placeholder="Search for users"
							allowClear
							bordered={false}
							onChange={handleSearchInput}
							suffix={
								<img
									src={require("../../../assets/images/blue-search.svg")}
									alt="search-icon"
								/>
							}
						/>
						<Button
							type="primary"
							htmlType="button"
							className="more-curved-btn ml-sm-3 nomargin-bottom"
							onClick={toAddUser}
						>
							+ Add New User
						</Button>
					</div>
				</div>
				<div className="company-table ompany-table-new pt-3">
					<Table dataSource={users} columns={usersColumns} scroll={scroll} />
				</div>
			</div>
		</>
	);
};

export default UserListView;
