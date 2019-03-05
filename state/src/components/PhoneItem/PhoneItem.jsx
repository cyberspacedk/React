import React from 'react';
// import PropTypes from 'prop-types';
import './phoneitem.css';

const PhoneItem = ({phone, addToCart }) => {


  return (
    <div className="card">

			<img src={phone.img} alt="" className="card__img" />

			<p className="card__rewiew">{phone.reviews}</p>

			<p className="card__title">{phone.title}</p>

			<div className="buy">
				<p className="price">{phone.price}</p>
				<img src="https://icon2.kisspng.com/20180704/czv/kisspng-shopping-cart-computer-icons-clip-art-place-order-5b3d5c67826703.8721611415307480075341.jpg"
				 alt="cart" data-name={phone.title} onClick={addToCart}/>
			</div>

    </div>
  )
}

// PhoneItem.propTypes = {
// 	img : PropTypes.string.isRequired,
// 	reviews : PropTypes.number.isRequired,
// 	title : PropTypes.string.isRequired,
// 	price : PropTypes.number.isRequired,
// }

export default PhoneItem
