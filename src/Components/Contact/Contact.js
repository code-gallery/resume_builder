import React from 'react';

import ContactView from "./Contact.view";
import "./contact.css";

const Contact = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  const formFields = {};

  return <ContactView formFields={formFields} handleSubmit={handleSubmit} />;
};

export default Contact;