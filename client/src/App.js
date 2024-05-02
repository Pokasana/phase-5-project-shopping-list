import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import  Users from './features/users/Users'
import  Shops from './features/shops/Shops'
import Items from './features/items/Items'
import SingleItemPage from './features/items/SingleItemPage'
import LoginPage from './features/login/LoginPage'
import NavBar from './app/NavBar'
import AuthBox from './features/login/AuthBox'
import PrivateRoute from './app/PrivateRoute'

import { useSelector, useDispatch } from 'react-redux'
import { checkAuth, selectLoggedInUser } from './features/login/loginSlice'

function App() {
  const [isLoaded,  setIsLoaded] = useState(false);
  const [refreshPage,  setRefreshPage] = useState(false)

  const dispatch = useDispatch()

  const currentUser = useSelector(selectLoggedInUser)

  function refresh() {
    setRefreshPage(!refreshPage)
  };

  useEffect(() => {
    dispatch(checkAuth)
    console.log(currentUser)
  },[selectLoggedInUser, dispatch])

  return (
    <div>
      <NavBar />

      {Object.keys(currentUser).length > 0
        ? <AuthBox />
        : null
      }

      <Switch>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/items">
          <Items isLoaded={isLoaded} refresh={refresh}/>
        </Route>
        <Route exact path="/items/:itemId">
          <SingleItemPage/>
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
