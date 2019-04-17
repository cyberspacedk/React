import React, {useState} from "react";



const Form = ({add}) => {

  const initialState ={
    name: '',
    username: '',
  }

  const [user, setUser] = useState(initialState);

  const inputChange = (e) => {
    const {name, value} = e.target;
    setUser ({...user, [name]:value});
  }

  const formSubmit = e => { 
    e.preventDefault(); 
    user.name && user.username && add(user) ; 
    setUser(initialState);
  }

  return (
    <form onSubmit={formSubmit}>

      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={inputChange}/>

      <label>Username</label> 
      <input type="text" name="username" value={user.username} onChange={inputChange}/>

      <button>Add new user</button>
    </form>
  );
 
};

export default Form;
