import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory, useRouteMatch } from "react-router-dom";
import  Users from './Users'
import  Shops from './Shops'
import Items from './Items'
import ItemInfo from './ItemInfo'

function App() {
  const [usersList, setUsersList] = useState([]);
  const [isLoaded,  setIsLoaded] = useState(false);
	const [shopsList, setShopsList] = useState([])
  const [refreshPage,  setRefreshPage] = useState(false)
  const history = useHistory();
  const match = useRouteMatch();

  function refresh() {
    setRefreshPage(!refreshPage)
  };

  //users
  //move this down  to Login component later - refer Shops
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
	function onItemDelete(id) {
		fetch(`http://127.0.0.1:5555/items/${id}`, {
			method: "DELETE",
		})
		.then(r => r.json())
		.then((res) => {
      if (res.delete_successful === true) {
        refresh()
      }
		});
	};

  function navigateItemEdit(id) {
    history.push(`/items/${id}`)
  };


  return (
    <div>
      <Switch>
        <Route exact path="/items">
          <Items shopsList={shopsList} isLoaded={isLoaded} clickHandler={onItemDelete} refresh={refresh}/>
        </Route>
        <Route path="/items/:itemId">
          <ItemInfo />
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
