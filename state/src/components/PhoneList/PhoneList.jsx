import React from 'react';
import './phonelist.css';
import PropTypes from 'prop-types';
import PhoneItem from '../PhoneItem/PhoneItem';


const PhoneList = ({phones,addToCart}) => {


  return (
    <ul className="container">


    {phones.map(elem => ( 
        <PhoneItem phone={elem} key={elem.title} addToCart={addToCart}/>
    ))}
     
    </ul>
  )
}


PhoneList.propTypes = {
  phones : PropTypes.arrayOf(
    PropTypes.shape({
      img : PropTypes.string.isRequired,
      reviews : PropTypes.number.isRequired,
      title : PropTypes.string.isRequired,
      price : PropTypes.number.isRequired,
    })
  )
}


export default PhoneList
