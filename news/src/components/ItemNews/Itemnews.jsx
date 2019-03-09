import React from 'react';

const Itemnews = ({title,id, extend, full, toggle}) => {
  return (
    <li data-id={id} onClick={extend}>
      <p className="article" data-id={id}>{title}</p>
      {toggle &&  <p className="article-extend">{full}</p>} 
    </li>
  )
}

export default Itemnews;
