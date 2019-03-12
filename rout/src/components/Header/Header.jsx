import React from "react";
import  {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
					<Link to='/roadster'> Tesla Roadster</Link> 
        </li>
        <li>
					<Link to='/model-s'> Tesla Model S</Link>  
        </li>
        <li>
					<Link to='/model-x'> Tesla Model X</Link>  
        </li>
        <li>
					<Link to='/user'> User</Link>  
        </li>
      </ul>
    </header>
  );
};

export default Header;
