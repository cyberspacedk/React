import React from 'react';
import style from './Bricks.module.css'

const Price = ({price}) => {
  return (
    <div className={style.house_price}>
      {price}
    </div>
  )
}

export default Price
