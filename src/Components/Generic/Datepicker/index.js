import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { DatePicker, Space } from "antd";

const Datepicker = ({ handleDatepickerChange, width, ...rest }) => {

	return (
		<Fragment>
			<Space direction="vertical">
        <DatePicker onChange={handleDatepickerChange} style={{width: width}} {...rest} />
			</Space>
		</Fragment>
	);
};

Datepicker.propTypes = {
	width: PropTypes.number,
	handleDatepickerChange: PropTypes.func,
	bordered: PropTypes.bool,
	suffixIcon: PropTypes.node,
};

Datepicker.defaultProps = {
	bordered: false,
	suffixIcon: (
		<span className="datepicker-caret">
			<img src={require("../../../assets/images/calendar-yes.svg")} />
		</span>
	),
};

export default Datepicker;
