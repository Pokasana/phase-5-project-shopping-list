import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import  Login from './Login'
import  Shops from './Shops'
import Items from './Items'

function App() {
  const [usersList, setUsersList] = useState([]);
  const [isLoaded,  setIsLoaded] = useState(false);
  const [currentUser, setCurrentUser]  = useState("");
	const [shopsList, setShopsList] = useState([])
  const [refreshPage,  setRefreshPage] = useState(false)

  function refresh() {
    setRefreshPage(!refreshPage)
  };

  //users
  //move this down  to Login component later - refer Shops
  useEffect(() =>  {
    fetch('http://127.0.0.1:5555/login')
    .then(r => r.json())
    .then(users => {
      setUsersList(users);
      setIsLoaded(true);
    })
  }, [refreshPage]);

  function loginHandler(userName) {
    setCurrentUser(userName)
  };

  function onAddUser() {
    setRefreshPage(!refreshPage)
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
    
  function onAddShop() {
    setRefreshPage(!refreshPage)
  };

	function onShopDelete(id) {

		fetch(`http://127.0.0.1:5555/shops/${id}`, {
			method: "DELETE",
		})
		.then(r => r.json())
		.then((res) => {
      if (res.delete_successful === true) {
        setRefreshPage(!refreshPage)
      }
		})
	};

  //Items
	function onDeleteItem(id, shop_id) {

		fetch(`http://127.0.0.1:5555/items/${id}`, {
			method: "DELETE",
		})
		.then(r => r.json())
		.then((res) => {
      if (res.delete_successful === true) {
        setRefreshPage(!refreshPage)
      }
		});
	};

	function onAddItem(newItem) {
		console.log(newItem)
    // setRefreshPage(!refreshPage)
	};

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Items shopsList={shopsList} isLoaded={isLoaded} onAddItem={onAddItem} clickHandler={onDeleteItem}/>
        </Route>
        <Route path="/login">
          <Login usersList={usersList} isLoaded={isLoaded} loginHandler={loginHandler} currentUser={currentUser} onAddUser={onAddUser} refresh={refresh} />
        </Route>
        <Route path="/shops">
          <Shops shopsList={shopsList} isLoaded={isLoaded} onAddShop={onAddShop} clickHandler={onShopDelete} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
