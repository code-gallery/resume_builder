import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Modal, Button } from "antd";

const ModalDKM = ({ children, modalWillUnmount, ...rest }) => {
	const [isModalVisible, setIsModalVisible] = useState(true);
	const history = useHistory();

	const deviceScreenWidth = window.screen.width;
	const isTab = deviceScreenWidth > 420 && deviceScreenWidth < 1120;
	const isMobile = deviceScreenWidth < 420;

	// const showModal = () => {
	// 	setIsModalVisible(true);
	// };

	// const handleOk = () => {
	// 	setIsModalVisible(false);
	// };

	const handleCancel = () => {
		modalWillUnmount();
		setIsModalVisible(false);
	};

	return (
		<>
			<Modal
				// title="Title"
				visible={isModalVisible}
				width={rest.width || (isTab || isMobile ? "75%" : "40%")}
				footer={null}
				// onOk={handleOk}
				onCancel={handleCancel}
			>
				{children}
			</Modal>
		</>
	);
};

ModalDKM.propTypes = {
	
};

ModalDKM.defaultProps = {

};

export default ModalDKM;
