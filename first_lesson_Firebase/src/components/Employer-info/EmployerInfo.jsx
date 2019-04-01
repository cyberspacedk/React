import React from 'react';  
import Userinfo from '../User-info/UserInfo';
import UserList from '../User-list/UserList';
import './employer.css';


const userData = [
  {
      title: 'Call Office',
      text : '781-000-0002',
  },
  {
      title: 'Call Mobile',
      text : '617-000-0002',
  },
  {
      title: 'SMS',
      text : '617-000-0002',
  },
  {
      title: 'Email',
      text : 'jtaylor@fakemail.com'
  }
];




// parent for User-info 
const Employerinfo = () => {

  return (
    <div className="user-info-box"> 
      <Userinfo />
      <UserList userData={userData}/>
    </div>
  );

}
  




export default Employerinfo;
