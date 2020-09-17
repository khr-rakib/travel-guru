import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const issLoggedIn = useSelector((state) => state.loggedInUserInformation);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        issLoggedIn.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
