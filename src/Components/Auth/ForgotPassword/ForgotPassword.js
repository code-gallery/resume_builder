import React, { useState } from "react";
import {Form, Input, Button} from 'antd';

import ForgotPasswordSuccessMessageView from "./ForgotPasswordSuccessMessage.view";

const ForgotPassword = () => {
	const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const submitHandler = data => {
    console.log(data);
    setIsSubmittedSuccessfully(true);
  }

  return isSubmittedSuccessfully ? (
		<ForgotPasswordSuccessMessageView />
	) : (
		<div className="login-form">
			<div className="font-30 pop-semibold orange">Reset your password</div>
			<div className="font-18">
				Enter your username or email address and we will send you a link to
				reset your password.
			</div>
			<div className="form pt-40">
				<Form name="forgotPasswordForm" onFinish={submitHandler}>
					<div className="login-fields">
						<div className="font-14 lblue">Email</div>
						<Form.Item
							name="email"
							rules={[
								{ required: true, message: "Please enter your email" },
								{ type: "email", message: "Please enter valid email" },
							]}
						>
							<Input />
						</Form.Item>
					</div>
					<div className="login-fields">
						<Button
							type="primary"
							htmlType="submit"
							className="login orange-bg curved-btn white"
						>
							Submit
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
}

export {ForgotPassword};