import React, { useState } from 'react';

import ProfileView from "./Profile.view";
import "./profile.css";
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/");
  };

  const formFields = [{}];
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = (data) => {
    console.log(data);
    redirectToHome();
  };

  return (
		<ProfileView
			formFields={formFields}
			handleSubmit={handleSubmit}
			profilePicture={profilePicture}
			setProfilePicture={setProfilePicture}
			redirectToHome={redirectToHome}
		/>
	);
};

export default Profile;