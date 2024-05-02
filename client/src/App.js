import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import  Users from './features/users/Users'
import  Shops from './features/shops/Shops'
import Items from './features/items/Items'
import SingleItemPage from './features/items/SingleItemPage'
import LoginPage from './features/login/LoginPage'
import NavBar from './app/NavBar'
import AuthBox from './features/login/AuthBox'

import { useSelector } from 'react-redux'
import { selectLoggedInUser } from './features/login/loginSlice'

function App() {
  const [isLoaded,  setIsLoaded] = useState(false);
  const [refreshPage,  setRefreshPage] = useState(false)

  const currentUser = useSelector(selectLoggedInUser)

  function refresh() {
    setRefreshPage(!refreshPage)
  };

  return (
    <div>
      <NavBar />
      
      {Object.keys(currentUser).length > 0
        ? <AuthBox />
        : null
      }

      <Switch>
        <Route exact path="/login" element={<LoginPage />}>
          <LoginPage/>
        </Route>
        <Route exact path="/items">
          <Items isLoaded={isLoaded} refresh={refresh}/>
        </Route>
        <Route exact path="/items/:itemId">
          <SingleItemPage/>
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/shops">
          <Shops />
        </Route>
      </Switch>
    </div>
  );

};

export default App;
