import React from "react";
import { useHistory } from "react-router-dom";

import {LoginView} from "./Login.view";
import "./login.css";

const Login = () => {
  const history = useHistory();

  const loginHandler = data => {
    console.log(data);
    history.push("/");
  }

  return (
     <LoginView onLogin={loginHandler}/>
  )
}

export {Login};