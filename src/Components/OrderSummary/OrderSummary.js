import React from "react";
import { useSelector } from "react-redux";
import "./OrderSummary.css";

function OrderSummary(props) {
  var ingredients = useSelector((state) => state.ingredients.ingredients);
  var totalPrice = useSelector((state) => state.ingredients.totalPrice);

  const ingredientSummary = Object.keys(ingredients).map((value, index) => {
    return <li key={value}>{value}: {ingredients[value]}</li>;
  });
  return (
    <div>
      <h5>Your Order</h5>
      <ul className="list">{ingredientSummary}</ul>
      <h6>Total Price: {totalPrice}</h6>
      
    </div>
  );
}

export default OrderSummary;
