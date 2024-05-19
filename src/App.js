import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {history} from "./utils/history";

import AuthLayoutRoute from './Layouts/AuthLayout/AuthLayoutRoute';

const Login = React.lazy(() => import('./Pages/Login'));
const ForgotPassword = React.lazy(() => import('./Pages/ForgotPassword'));
const ResetPassword = React.lazy(() => import('./Pages/ResetPassword'));
const DefaultLayout = React.lazy(() => import('./Layouts/DefaultLayout/Container'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const App = () => {
  return (
     <Router history={history}>
       <React.Suspense fallback={loading()}>
         <Switch>
           <AuthLayoutRoute exact path='/login' component={Login}/>
           <AuthLayoutRoute exact path='/forgot-password' component={ForgotPassword}/>
           <AuthLayoutRoute exact path='/reset-password' component={ResetPassword}/>
           <Route path="/" render={props => <DefaultLayout {...props}/>}/>
         </Switch>
       </React.Suspense>
     </Router>
  );
}

export default App;
