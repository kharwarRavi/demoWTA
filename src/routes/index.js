import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from "./publicRoute";
import AuthenticatedRoute from "./authenticatedRoute";
import PageNotFound from "../scenes/pageNotFound";
import Login from "../scenes/login";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import ResetPassword from "../scenes/resetPassword";
import ForgotPassword from "../scenes/forgotPassword";
import Employees from "../scenes/employees";
import Organizations from "../scenes/organizations";
import Settings from "../scenes/settings";
import Users from "../scenes/users";

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
        <Header
          open={open}
          setOpen={setDrawerOpen}
          setAuth={setIsAuthenticated}
        />
      )}
      <main className="mainBox">
        {isAuthenticated && <SideBar open={open} setOpen={setDrawerOpen} />}
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
            path="/login"
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
          <AuthenticatedRoute
            isAuthenticated={isAuthenticated}
            path="/employees"
            component={Employees}
            exact
            handleEvent={handleLogin}
          />
          <AuthenticatedRoute
            isAuthenticated={isAuthenticated}
            path="/users"
            component={Users}
            exact
            handleEvent={handleLogin}
          />
          <AuthenticatedRoute
            isAuthenticated={isAuthenticated}
            path="/organizations"
            component={Organizations}
            exact
            handleEvent={handleLogin}
          />
          <AuthenticatedRoute
            isAuthenticated={isAuthenticated}
            path="/settings"
            component={Settings}
            exact
            handleEvent={handleLogin}
          />
          <Route
            render={(props) => (
              <PageNotFound isAuthenticated={isAuthenticated} {...props} />
            )}
          />
        </Switch>
      </main>
    </Router>
  );
};

export default Routes;
