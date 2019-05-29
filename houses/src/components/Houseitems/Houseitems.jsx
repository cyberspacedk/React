import React from "react";
import Address from "../Bricks/Address";
import Area from "../Bricks/Area";
import Image from "../Bricks/Image";
import Price from "../Bricks/Price";
import style from "./Houseitems.module.css";
import PropTypes from "prop-types";

const Houseitems = ({ houses, template }) => {
  return houses.map(elem => (
    <li className={style.houseitem} key={elem.id}>
      {template.map(
        el =>
          (el.component === "IMAGE" && (
            <Image images={elem.images[0]} el={el} price={elem.price} />
          )) ||
          (el.component === "ADDRESS" && (
            <Address full_address={elem.full_address} />
          )) ||
          (el.component === "PRICE" && <Price price={elem.price} />) ||
          (el.component === "AREA" && <Area area={elem.area} />)
      )}
    </li>
  ));
};

Houseitems.propTypes = {
  houses: PropTypes.number.isRequired
};

export default Houseitems;
