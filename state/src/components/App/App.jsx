import React, { Component , Fragment} from "react";
import "./app.css";
import Header from '../Header/Header';
import PhoneList from '../PhoneList/PhoneList';
import Cart from '../Cart/Cart';

export default class App extends Component { 
 
  state = {
    phones :  [
      {
          img: 'https://i1.rozetka.ua/goods/5496886/nokia_11pl2l01a14_images_5496886440.jpg',
          reviews: 356,
          title: 'Nokia 6.1 Dual Sim 4/64GB Blue',
          price: 5999,
          curency: 'UAH',
          screen: 5.5,
          resolution: 'FullHD (1920x1080)',
          ram: 4,
          rom: 84,
          frontCamera: '8MP',
          mainCamera: '16MP'
      },
      {
          img: 'https://i2.rozetka.ua/goods/7373877/apple_iphone_xs_64_gb_space_gray_images_7373877054.jpg',
          reviews: 33,
          title: 'Apple iPhone Xs 64GB Space Gray (MT9E2)',
          price: 28359,
          curency: 'UAH',
          screen: 5.8,
          resolution: '2436х1125',
          ram: 4,
          rom: 64,
          frontCamera: '7MP',
          mainCamera: '12MP'
      },
      {
          img: 'https://i1.rozetka.ua/goods/1897104/copy_meizu_m5_note_16gb_grey_euromart_58de3dd19c6ee_images_1897104807.jpg',
          reviews: 650,
          title: 'Meizu M5 Note 32GB Grey',
          price: 3199,
          curency: 'UAH',
          screen: 5.5,
          resolution: 'FullHD (1920x1080)',
          ram: 3,
          rom: 32,
          frontCamera: '5MP',
          mainCamera: '13MP'
      },
      {
          img: 'https://i2.rozetka.ua/goods/3249707/samsung_galaxy_s9_plus_64gb_black_images_3249707183.jpg',
          reviews: 118,
          title: 'Samsung Galaxy S9 Plus 64GB Midnight Black',
          price: 25999,
          curency: 'UAH',
          screen: 6.2,
          resolution: '2960x1440',
          ram: 6,
          rom: 64,
          frontCamera: '8MP',
          mainCamera: '12MP'
      },
      {
          img: 'https://i2.rozetka.ua/goods/8089121/xiaomi_mi8_lite_6_64gb_dream_blue_images_8089121679.jpg',
          reviews: 294,
          title: 'Xiaomi Mi 8 Lite 4/64GB Aurora Blue',
          price: 6499,
          curency: 'UAH',
          screen: 6.26,
          resolution: '2280 x 1080',
          ram: 4,
          rom: 64,
          frontCamera: '24MP',
          mainCamera: '12MP'
      },
      {
          img: 'https://i1.rozetka.ua/goods/4627117/huawei_p20_4_128gb_gold_images_4627117200.jpg',
          reviews: 72,
          title: 'Huawei P20 4/128GB Pink Gold',
          price: 13999,
          curency: 'UAH',
          screen: 5.8,
          resolution: '2244 x 1080',
          ram: 4,
          rom: 128,
          frontCamera: '24MP',
          mainCamera: '20MP'
      },
      {
          img: 'https://i2.rozetka.ua/goods/6182667/sony_xperia_xz2_premium_black_images_6182667424.jpg',
          reviews: 61,
          title: 'Sony Xperia XZ2 Premium Black',
          price: 13888,
          curency: 'UAH',
          screen: 5.8,
          resolution: '4K UHD (3840x2160)',
          ram: 6,
          rom: 64,
          frontCamera: '13MP',
          mainCamera: '19MP'
      },
      {
          img: 'https://i2.rozetka.ua/goods/10170923/razer_phone_2_zzb0002493_images_10170923512.jpg',
          reviews: 2,
          title: 'Razer Phone 2 Black',
          price: 28999,
          curency: 'UAH',
          screen: 5.72,
          resolution: 'QHD (2560х1440)',
          ram: 8,
          rom: 64,
          frontCamera: '8MP',
          mainCamera: '12MP'
      }, 
  ],
		cart : [],
		showCart : false ,
  }
  
addToCart = (evt)=> {
    let title = evt.target.dataset.name;
    let result = this.state.phones.find(elem => elem.title === title);  

    this.setState((prevState) => ({
    	cart : [...prevState.cart, result]
    })) 
}

removeToCart = ({target})=> { 
	this.setState((prevState) => ({
		cart :  prevState.cart.filter(elem => elem.title !== target.dataset.name)
	})) 
}

showCart = ()=> {
	this.setState((prevState)=>({
		showCart: !prevState.showCart,
	}))
}

render() {
	const {phones, cart, showCart} = this.state;

	return (
			<Fragment>
				<Header cart={cart} showCart={this.showCart}/>
				<Cart cart={cart} show={showCart} showCart={this.showCart} removeCart={this.removeToCart}/>
				<PhoneList phones={phones} addToCart={this.addToCart}/> 
			</Fragment>
	);
}
}
