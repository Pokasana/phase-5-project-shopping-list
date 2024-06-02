import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { checkAuth, selectLoggedInUser } from "../features/login/loginSlice";

const PrivateRoute = ({ component: Component }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth);
  }, [dispatch]);

  const currentUser = useSelector(selectLoggedInUser);
  const loggedIn = Object.keys(currentUser).length > 0;

  return <>{loggedIn ? <Component /> : <Redirect to="/login" />}</>;
};

export default PrivateRoute;
