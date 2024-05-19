import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Select } from "antd";

const Dropdown = ({ options, width, handleDropdownChange, ...rest }) => {
	const { Option } = Select;
	return (
		<Fragment>
			<Select style={{ width: width }} onChange={handleDropdownChange} {...rest}>
				{options.map((option) => (
					<Option key={option.value} value={option.value} disabled={!!option.disabled}>
						{option.label}
					</Option>
				))}
			</Select>
		</Fragment>
	);
};

Dropdown.propTypes = {
	options: PropTypes.array.isRequired,
	className: PropTypes.string,
	defaultValue: PropTypes.string,
	width: PropTypes.number,
	handleDropdownChange: PropTypes.func,
	bordered: PropTypes.bool,
	suffixIcon: PropTypes.node,
};

Dropdown.defaultProps = {
	className: "dropdown",
	width: 250,
	bordered: false,
	suffixIcon: (
		<span className="caret">
			<img src={require("../../../assets/images/blue-select.svg")} />
		</span>
	),
};

export default Dropdown;