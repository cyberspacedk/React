import React from 'react';
import ItemNews from '../ItemNews/Itemnews';

import './listofnews.css';

const Listofnews = ({news, extend}) => {
  return (
    <ul className="list-news">
      {news.map(elem => (

        <ItemNews title={elem.webTitle} key={elem.id} id={elem.id} full={elem.fullText} extend={extend} toggle={elem.toggle}/> 

      ))}
    </ul>
  )
}

export default Listofnews;
