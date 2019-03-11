import React from 'react';
import './Itemnews.css';

const Itemnews = ({title,id, extend, full, toggle}) => {
  return (
    <li data-id={id} onClick={extend} className={toggle ? 'article-active' : 'arcticle'}>
      <p  data-id={id}>{title}</p><span className={toggle ? 'arrow-active arrow' : 'arrow'}>&Lambda;</span>
      {toggle &&  <p className="article-extend">{full}</p>} 
    </li>
  )
}

export default Itemnews;
