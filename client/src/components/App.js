import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import  Login from './Login'
import  Shops from './Shops'
import Items from './Items'

function App() {
  const [usersList, setUsersList] = useState([]);
  const [isLoaded,  setIsLoaded] = useState(false);
  const [currentUser, setCurrentUser]  = useState("");

  //fetch users
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

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Items />
        </Route>
        <Route path="/login">
          <Login usersList={usersList} isLoaded={isLoaded} loginHandler={loginHandler} currentUser={currentUser} onAddUser={onAddUser} />
        </Route>
        <Route path="/shops">
          <Shops />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
