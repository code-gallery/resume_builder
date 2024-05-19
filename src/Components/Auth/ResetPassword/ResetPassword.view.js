import React from "react";
import { Button, Form, Input } from "antd";

const ResetPasswordView = ({ onResetPassword }) => {

	const resetPasswordHandler = (data) => {
		onResetPassword(data);
  };
  
	return (
		<div className="login-form">
			<div class="font-30 pop-semibold orange">Set your new password </div>
			<div class="font-18">8-character minimum; case sensitive</div>
			<div className="form pt-40">
				<Form name="login-form" onFinish={resetPasswordHandler}>
					<div class="login-fields">
						<div class="font-14 lblue">New Password</div>
						<Form.Item
							name="password"
							rules={[
								{ required: true, message: "Please enter your password!" },
								{ pattern: /^.+$/, min: 8, max: 20, message: "Please enter valid password" },
							]}
						>
							<Input.Password />
						</Form.Item>
					</div>
					<div class="login-fields">
						<div class="font-14 lblue">Re-enter password</div>
						<Form.Item
							name="repeatPassword"
							rules={[
								{ required: true, message: "Please enter your password!" },
							]}
						>
							<Input.Password />
						</Form.Item>
					</div>
					<div class="login-fields">
						<Button className="login blue-bg curved-btn white mr-3">Cancel</Button>
						<Button
							type="primary"
							htmlType="submit"
							className="login orange-bg curved-btn white"
						>
							Next
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
};

export { ResetPasswordView };
