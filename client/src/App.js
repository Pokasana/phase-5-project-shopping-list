import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import  Users from './features/users/Users'
import  Shops from './features/shops/Shops'
import Items from './features/items/Items'
import SingleItemPage from './features/items/SingleItemPage'
import NavBar from './app/NavBar'

function App() {
  const [isLoaded,  setIsLoaded] = useState(false);
  const [refreshPage,  setRefreshPage] = useState(false)

  function refresh() {
    setRefreshPage(!refreshPage)
  };

  //users
  function onUserDelete(id) {
		fetch(`http://127.0.0.1:5555/users/${id}`, {
			method: "DELETE",
		})
		.then(r => r.json())
		.then((res) => {
      if (res.delete_successful === true) {
        refresh()
      }
		})
	};

  //shops  
	function onShopDelete(id) {
		fetch(`http://127.0.0.1:5555/shops/${id}`, {
			method: "DELETE",
		})
		.then(r => r.json())
		.then((res) => {
      if (res.delete_successful === true) {
        refresh()
      }
		})
	};

  //Items
  return (
    <div>
      <NavBar />
      <Switch>
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
          <Shops isLoaded={isLoaded} clickHandler={onShopDelete} refresh={refresh}/>
        </Route>
      </Switch>
    </div>
  );

};

export default App;
