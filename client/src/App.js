import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import  Users from './features/users/Users'
import  Shops from './features/shops/Shops'
import Items from './features/items/Items'
import SingleItemPage from './features/items/SingleItemPage'
import LoginPage from './features/login/LoginPage'
import NavBar from './app/NavBar'
import AuthBox from './features/login/AuthBox'
import PrivateRoute from './app/PrivateRoute'

import { useSelector } from 'react-redux'
import { selectLoggedInUser } from './features/login/loginSlice'

function App() {
  const currentUser = useSelector(selectLoggedInUser)

  const location = useLocation()

  return (
    <div>
      <NavBar />

      {
        Object.keys(currentUser).length > 0 && location.pathname !== "/login"
        ? <AuthBox />
        : null
      }

      <Switch>
        <Route exact path="/login" component={LoginPage}/>

        <Route exact path="/items">
          <Items />
        </Route>
        <Route exact path="/items/:itemId">
          <PrivateRoute component={SingleItemPage}/>
        </Route>
        <Route path="/users">
          <PrivateRoute component={Users}/>
        </Route>
        <Route path="/shops">
          <PrivateRoute component={Shops}/>
        </Route>
      </Switch>
    </div>
  );

};

export default App;
