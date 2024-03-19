import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import  Users from './Users'
import  Shops from './Shops'
import Items from './Items'

function App() {
  const [usersList, setUsersList] = useState([]);
  const [isLoaded,  setIsLoaded] = useState(false);
	const [shopsList, setShopsList] = useState([])
  const [refreshPage,  setRefreshPage] = useState(false)

  function refresh() {
    setRefreshPage(!refreshPage)
  };

  //users
  useEffect(() =>  {
    fetch('http://127.0.0.1:5555/users')
    .then(r => r.json())
    .then(users => {
      setUsersList(users);
      setIsLoaded(true);
    })
  }, [refreshPage]);

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
	useEffect(() => {
    fetch('http://127.0.0.1:5555/shops')
    .then(r => r.json())
    .then(data => {
      setShopsList(data);
      setIsLoaded(true);
    })
    }, [refreshPage])
  
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
      <Switch>
        <Route exact path="/items">
          <Items shopsList={shopsList} isLoaded={isLoaded} refresh={refresh}/>
        </Route>
        <Route path="/users">
          <Users usersList={usersList} isLoaded={isLoaded} clickHandler={onUserDelete} refresh={refresh} />
        </Route>
        <Route path="/shops">
          <Shops shopsList={shopsList} isLoaded={isLoaded} clickHandler={onShopDelete} refresh={refresh}/>
        </Route>
      </Switch>
    </div>
  );

};

export default App;
