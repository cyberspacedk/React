import React from 'react';
import './cart.css';

const Cart = ({cart,show,showCart,removeCart}) => {

  return (
    <div className= {show ? 'Cart' : 'visibility' }>
      <span className="close" onClick={showCart}>X</span>
      <ul className="cart-list">
 
            {cart.map(elem => (  
                 <li key={elem.title}>
                     <p> Название : {elem.title}</p>
                     <p> Цена : {elem.price}</p> 
                     <span className="remove" data-name={elem.title} onClick={removeCart}>X</span>
                 </li> 
            ))}
            
            <li className="total">Total : {cart.reduce((acc,elem)=> acc+elem.price , 0)}</li>
  
      </ul>

    </div>
  )
}

export default Cart
