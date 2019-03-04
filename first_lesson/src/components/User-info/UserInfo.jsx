import React from 'react'; 
import avatar from './images.png';
import  './user-info.css';

const Userinfo = () => {

  return (
    <div className="user-info">

      <img src={avatar} alt="Ava" className="user-avatar"/> 
      
      <div className="user-description">
          <p>Julie Taylor</p>
          <p>VP of marketing</p>
      </div>

    </div>
  )
}

export default Userinfo;
