import React from "react";
import {Spin} from "antd";
import '../../assets/less/auth_layout.css';

const SideView = React.lazy(() => import('./SideView'));
const Footer = React.lazy(() => import('./Footer'));

const AuthLayout = ({children}) => {
  return (
     <div className="login-container d-flex h-100">
       <div className="left-login-form-logo w-50 h-100 pt-110 pl-5 position-relative">
        <div class="logo_dkm"><a href=""><img src={require("../../assets/images/dkm-logo.png")} /></a></div>
        <div className="deek_logo"><img src={require('../../assets/images/deek-2.png')}/></div>
         {children}
         <React.Suspense fallback={<Spin/>}>
           <Footer/>
         </React.Suspense>
       </div>
       <React.Suspense fallback={<Spin/>}>
         <SideView/>
       </React.Suspense>
     </div>
  )
}

export default AuthLayout;