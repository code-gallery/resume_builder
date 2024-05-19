import React from 'react';
import {Route} from 'react-router-dom';
import AuthLayout from './Container'

const AuthLayoutRoute = ({component: Component, ...rest}) => {
  return (
     <Route {...rest} render={matchProps => (
        <AuthLayout {...matchProps}>
          <Component {...matchProps} />
        </AuthLayout>
     )}/>
  )
};
export default AuthLayoutRoute;