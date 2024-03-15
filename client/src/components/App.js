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

  //users
  //move this down  to Login component later - refer Shops
  useEffect(() =>  {
    fetch('http://127.0.0.1:5555/login')
    .then(r => r.json())
    .then(users => {
      setUsersList(users);
      setIsLoaded(true);
    })
  }, []);

  function loginHandler(userName) {
    setCurrentUser(userName)
  };

  function onAddUser(newUser) {
    setUsersList([...usersList, newUser])
  };

  //shops
	useEffect(() => {
    fetch('http://127.0.0.1:5555/shops')
    .then(r => r.json())
    .then(data => {
      setShopsList(data);
      setIsLoaded(true);
    })
    }, [])
    
  function onAddShop(newShop) {
    setShopsList([...shopsList, newShop])
  };

	function onShopDelete(id) {

		fetch(`http://127.0.0.1:5555/shops/${id}`, {
			method: "DELETE",
		})
		.then(r => r.json())
		.then(() => {
			setShopsList(shops => {
				return shops.filter(shop => shop.id !== id)
			})
		})
	};

  //Items
	function onDeleteItem(id, shop_id) {

		fetch(`http://127.0.0.1:5555/items/${id}`, {
			method: "DELETE",
		})
		.then(r => r.json())
		.then(() => {
			const filteredItems = []

			shopsList.map(shop => {
				if (shop.id === shop_id) {
					shop.items = shop.items.filter(item => item.id !== id)
					filteredItems.push(shop)
				}
				else filteredItems.push(shop)
			});

			setShopsList(filteredItems)

		});
	};

	function onAddItem(newItem) {
		console.log(newItem)
	};

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Items shopsList={shopsList} isLoaded={isLoaded} onAddItem={onAddItem} clickHandler={onDeleteItem}/>
        </Route>
        <Route path="/login">
          <Login usersList={usersList} isLoaded={isLoaded} loginHandler={loginHandler} currentUser={currentUser} onAddUser={onAddUser} />
        </Route>
        <Route path="/shops">
          <Shops shopsList={shopsList} isLoaded={isLoaded} onAddShop={onAddShop} clickHandler={onShopDelete} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
