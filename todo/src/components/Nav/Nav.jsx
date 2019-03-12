import React from 'react';
import  {Link} from 'react-router-dom';


const Nav = () => {
  return (
    <ul>
      <li><Link to='/all'> ВСЕ </Link></li>
      <li><Link to='/done'> ЗАВЕРШЕННЫЕ </Link></li>
      <li><Link to='/in-progress'> В ПРОЦЕССЕ </Link></li>
    </ul>
  )
}

export default Nav;
