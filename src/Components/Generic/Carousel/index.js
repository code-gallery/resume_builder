import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Carousel as AntDCarousel } from "antd";

const Carousel = ({ items, width, className, ...rest }) => {
	return (
		<Fragment>
			<AntDCarousel className={className} style={{ width: width }}>
				{items.map((item) => item)}
			</AntDCarousel>
		</Fragment>
	);
};

Carousel.propTypes = {
	items: PropTypes.array.isRequired,
	width: PropTypes.string,
	className: PropTypes.string,
};

Carousel.defaultProps = {
	className: "carousel",
	width: "100%",
};

export default Carousel;