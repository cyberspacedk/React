import React from 'react';
import PropTypes  from 'prop-types';
import './user-item.css';

const UserItem = ({title,text}) => {

  return (
    <li className="user-item" key={title}>
      <p className="item-title"> {title} </p>
      <p className="item-text"> {text} </p>
    </li>
  )

}


UserItem.propTypes = {

	text: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    
}



export default UserItem;
