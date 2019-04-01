import React from 'react';
import EmployeeItem from '../Employee-item/EmployeeItem';
import PropTypes from 'prop-types';
import './employee-list.css';


const EmployeeList = ({employeeArr}) => { 

  return (
    <ul className="employee-list">
    {employeeArr.map(({name,surname,position})=>(
      <EmployeeItem  name={name} surname={surname} position={position} key={name}/>
    ))} 
    </ul>
  )
}

EmployeeList.propTypes ={ 
  employeeArr : PropTypes.arrayOf(

    PropTypes.shape({
      name : PropTypes.string.isRequired,
      surname : PropTypes.string.isRequired,
      position : PropTypes.string.isRequired,
    })

  )
}


export default EmployeeList;
