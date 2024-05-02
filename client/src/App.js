import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import  Users from './features/users/Users'
import  Shops from './features/shops/Shops'
import Items from './features/items/Items'
import SingleItemPage from './features/items/SingleItemPage'
import LoginPage from './features/login/LoginPage'
import NavBar from './app/NavBar'

function App() {
  const [isLoaded,  setIsLoaded] = useState(false);
  const [refreshPage,  setRefreshPage] = useState(false)

  function refresh() {
    setRefreshPage(!refreshPage)
  };

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
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
