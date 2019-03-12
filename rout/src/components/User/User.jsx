import React from "react";

const User = ({user}) => {


  return (

      <div>

     { Object.keys(user).length ? 

      <div> 
        <img src={user.picture.large} />
        <p className="userName">{user.name.first}</p>
        <p className="userEmail">{user.email}</p> 
      </div> 
        :
        <p>Loading ..... </p>}


    </div>
  )}


export default User;
