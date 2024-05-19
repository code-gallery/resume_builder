import React from "react";
import { Button, Form, Input, Radio } from "antd";
import { Link } from "react-router-dom";

const LoginView = ({ onLogin }) => {
	const [value, setValue] = React.useState(1);

	const onChange = (e) => {
		console.log("radio checked", e.target.value);
		setValue(e.target.value);
	};

	const loginHandler = (data) => {
		onLogin(data);
	};

	return (
		<div className="login-form">
			<div className="font-30 pop-semibold orange">Welcome!</div>
			<div className="font-18 pop-medium">Please login to your account.</div>
			<div className="radio_titlesss d-inline-block font-18 pop-medium pt-20">
				I am
        <Radio.Group className="ml-4" onChange={onChange} value={value}>
          <Radio value={1}>A staff member</Radio>
          <Radio value={2}>Company</Radio>
        </Radio.Group>
			</div>
			<div className="form pt-40">
				<Form name="login-form" onFinish={loginHandler}>
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
						<div className="font-14 lblue">Password</div>
						<Form.Item
							name="password"
							rules={[
								{ required: true, message: "Please enter your password!" },
							]}
						>
							<Input.Password />
						</Form.Item>
						<Link
							to="/forgot-password"
							className="font-14 lblue mt-1 d-flex justify-content-end"
						>
							Forgot Password?
						</Link>
					</div>
					<div className="login-fields">
						<Button
							type="primary"
							htmlType="submit"
							className="login orange-bg curved-btn white mt-4"
						>
							Log in
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
};

export { LoginView };
