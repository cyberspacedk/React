import React from 'react';
import PropTypes from 'prop-types';
import './employee-item.css';

const EmployeeItem = ({name,surname,position}) => { 

  return (
    <li className="employee-item">
      <p className="employee-name">{name}</p>
      <p className="employee-surname">{surname}</p>
      <p className="employee-position">{position}</p>
    </li>
  )
}

EmployeeItem.propTypes = {
    name : PropTypes.string.isRequired,
    surname : PropTypes.string.isRequired,
    position : PropTypes.string.isRequired,
}


export default EmployeeItem;
