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
      <h1>Project Client</h1>
      <Users users={usersList} isLoaded={isLoaded}/>
    </div>
  );
}

export default App;
