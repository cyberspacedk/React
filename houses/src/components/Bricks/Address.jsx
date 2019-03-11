import React from 'react';
import style from './Bricks.module.css'

const Address = ({full_address}) => {
  return (
    <div className={style.house_address}>
      {full_address}
    </div>
  )
}

export default Address
