import React, { Suspense, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';

import AddUpdateUserView from "./AddUpdateUser.view";
import "./addUpdateUser.css";
const CompanyBanner = React.lazy(() =>
	import("../../../Layouts/DefaultLayout/CompanyBanner")
);

const AddUpdateUser = () => {
  const { userId } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({});
  
  const saveFormData = (data) => {
		console.log(data);
		history.push("/users");
  };
  
  return (
		<>
			<Suspense>
				<CompanyBanner />
			</Suspense>
			<AddUpdateUserView
				userId={userId}
				formData={formData}
				saveFormData={saveFormData}
			/>
		</>
	);
};

export default AddUpdateUser;