import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";

const DropdownMenu = ({ options, onLogoutClick, user, children }) => {
	const menu = (
		<Menu className="profile-menu-popover">
			<div className="profile-menu-user-details">
				<div>
					<b>{user.name}</b>
				</div>
				<div>
					{user.email}
				</div>
			</div>
			{options.map((option, index) => (
				<Menu.Item
					key={index}
					onClick={option.link === "" ? onLogoutClick : null}
				>
					<Link to={option.link}>{option.label}</Link>
				</Menu.Item>
			))}
		</Menu>
	);

	return (
		<Fragment>
			<Dropdown
				overlay={menu}
				placement="bottomRight"
				arrow
				trigger={["click"]}
			>
				{children}
			</Dropdown>
		</Fragment>
	);
};

DropdownMenu.propTypes = {
	options: PropTypes.array.isRequired,
};

DropdownMenu.defaultProps = {
};

export default DropdownMenu;
