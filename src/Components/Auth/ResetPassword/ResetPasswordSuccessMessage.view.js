import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from "antd";

const ResetPasswordSuccessMessageView = () => {
  const history = useHistory();
  return (
		<Fragment>
			<div className="login-form">
				<div class="orange font-30 pop-semibold mb-3">Success</div>
				<div class="secd_text font-18 pop-medium mb-5">
					Your password is changed
				</div>
				<div class="login-fields">
					<Button
						type="primary"
						htmlType="submit"
						className="login orange-bg curved-btn white mt-2"
						onClick={() => history.push("/login")}
					>
						Login
					</Button>
				</div>
			</div>
		</Fragment>
	);
};

export default ResetPasswordSuccessMessageView;