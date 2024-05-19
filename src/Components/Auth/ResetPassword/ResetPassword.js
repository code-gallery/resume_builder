import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { ResetPasswordView } from "./ResetPassword.view";
import ResetPasswordSuccessMessageView from "./ResetPasswordSuccessMessage.view";

const ResetPassword = () => {
	const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
	const history = useHistory();

	const resetPasswordHandler = (data) => {
		console.log(data);
		setIsSubmittedSuccessfully(true);
		// history.push("/login");
	};

	return isSubmittedSuccessfully ? <ResetPasswordSuccessMessageView /> : <ResetPasswordView onResetPassword={resetPasswordHandler} />;
};

export { ResetPassword };