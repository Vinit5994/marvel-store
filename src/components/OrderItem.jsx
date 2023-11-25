import React from "react";
import "./css/orderCard.css";
const OrderItem = (props) => {
  // console.log("prosp =", props);
  return (
    <div className="order">
      <div className="order-details">
        <img src={props.image}/>
      </div>
      <ul className="order-items">
        
        {props.title}
      </ul>
      <div className="order-total">
        <span>${props.quantity * props.price}</span>
      </div>
      <div className="order-status">
        <span>{props.confirm ? "approved" : "cancled"}</span>
      </div>
    </div>
  );
};

export default OrderItem;