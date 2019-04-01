import React from 'react'; 
import PropTypes from 'prop-types';
import  './header.css';


const Header = ({content}) => {

  return (
    <header className="Header"> 
        {content}
    </header>
  )

}

Header.propTypes = { 
    content : PropTypes.string.isRequired,
}



export default Header;
