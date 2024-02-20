
import React, { useState, useEffect } from 'react';
import "./app.css";

const url = 'https://api.github.com/users';  
//const response = await fetch("https://api.github.com/users");

// second argument

const UseEffectFetchData = () => {
  console.log("in UseEffectFetchData pre getUsers");
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    console.log("in UseEffectFetchData in getUsers, pre fetch");
    const response = await fetch(url);
    const users = await response.json();
    console.log("in UseEffectFetchData in getUsers post fetch");
    setUsers(users);
    //console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url} className="strClass">profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default UseEffectFetchData;


