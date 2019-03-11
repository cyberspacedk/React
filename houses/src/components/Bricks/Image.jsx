import React from 'react';
import style from './Bricks.module.css'

const Image = ({images, el, price}) => {
  return (
    <div>

      {el.hasOwnProperty('children') ? 
      
      (<div className={style.absolute_price}> 
        <span  className={style.price}>{price}</span>
        <img src={images} className={style.houseimage}/>
      </div>)
       : 
            
      (<img src={images} className={style.houseimage}/>)}


      
    </div>
  )
}

export default Image
