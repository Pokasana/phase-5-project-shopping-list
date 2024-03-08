import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import  Users from './User'

function App() {
  const [usersList, setUsersList] = useState([]);
  const [isLoaded,  setIsLoaded] = useState(false);

  useEffect(() =>  {
      fetch('http://127.0.0.1:5555/users')
      .then(r => r.json())
      .then(users => {
        const li = users.map(user => user['name'])
        setUsersList(li);
          
        setIsLoaded(true);
      })
  },  []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <h1>Project Client</h1>
        </Route>
        <Route path="/users">
          <Users users={usersList} isLoaded={isLoaded}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
