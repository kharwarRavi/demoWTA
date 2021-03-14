import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from "./publicRoute";
import AuthenticatedRoute from "./authenticatedRoute";
import PageNotFound from "../scenes/pageNotFound";
import Login from "../scenes/login";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import ResetPassword from "../scenes/resetPassword";
import ForgotPassword from "../scenes/forgotPassword";

const Routes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("access_token") ? true : false
  );
  const [open, setDrawerOpen] = useState(false);

  const handleLogin = (user) => {
    setIsAuthenticated(user.loggedIn);
  };

  return (
    <Router>
      {isAuthenticated && (
        <Fragment>
          <Header
            open={open}
            setOpen={setDrawerOpen}
            setAuth={setIsAuthenticated}
          />
          <SideBar open={open} setOpen={setDrawerOpen} />
        </Fragment>
      )}
      <Switch>
        <PublicRoute
          isAuthenticated={isAuthenticated}
          path="/"
          exact
          component={Login}
          handleEvent={handleLogin}
        />
        <PublicRoute
          isAuthenticated={isAuthenticated}
          path="/forgot-password"
          exact
          component={ForgotPassword}
          handleEvent={handleLogin}
        />
        <PublicRoute
          isAuthenticated={isAuthenticated}
          path="/reset-password"
          exact
          component={ResetPassword}
          handleEvent={handleLogin}
        />
        {/* <AuthenticatedRoute
          isAuthenticated={isAuthenticated}
          path="/jobs"
          component={JobList}
          exact
          handleEvent={handleLogin}
        /> */}
        <Route
          render={(props) => (
            <PageNotFound isAuthenticated={isAuthenticated} {...props} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
