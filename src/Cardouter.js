import React, { useEffect, useState } from "react";
import Card from './Card.js';

const Cardouter = () => {
  var loading = false;
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  
  return (
    <>
    {users.length > 0 ? (
         <>
          {users.map(user => (
            <Card uName ={user.name} email = {user.email} uId = {user.id} key={user.id}/>
          ))}
           </>
      ): (
        <div className="heading">
        <h1 className="headerName">Loading</h1>
        </div>
      )}
    </>
  );
}

export default Cardouter;