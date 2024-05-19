import React, { Fragment } from 'react';

const ForgotPasswordSuccessMessageView = () => (
	<Fragment>
		<div className="login-form">
			<div className="font-30 pop-semibold orange">Reset your password</div>
			<div className="secd_text font-18 pop-medium">
				We have sent you a verification e-mail.
			</div>
			<div className="secd_text pt-40 font-18 pop-medium">
				Please verify your account via the link in the e-mail and reset your
				password.
			</div>
			<div className="secd_text pt-40 font-18 pop-medium">
				If you don’t receive an email from us, please check your spam folder or
				<br /> contact{" "}
				<a href="" style={{ textDecoration: "underline" }}>
					customer support.
				</a>
			</div>
			<div className="secd_text pt-40 font-18 pop-medium">
				The DKM Blue Team
			</div>
		</div>
	</Fragment>
);

export default ForgotPasswordSuccessMessageView;