import React from 'react';
import style from './Bricks.module.css'

const Area = ({area}) => {
  return (
    <div className={style.house_area}>
      {area}
    </div>
  )
}

export default Area;
