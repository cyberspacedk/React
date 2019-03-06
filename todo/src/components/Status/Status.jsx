import React, {Fragment} from 'react';
import './status.css';

const Status = ({showDoneItem, showAllItem, showActiveItem}) => {
  return (
    <div className="statusButton">
        <button onClick={showAllItem}>All</button>
        <button onClick={showDoneItem}>Complete</button>
        <button onClick={showActiveItem}>Uncomplite</button>
      
    </div>
  )
} 

export default Status
