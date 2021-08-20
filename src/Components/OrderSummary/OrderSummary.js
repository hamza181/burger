import React from "react";
import { useSelector } from "react-redux";
import "./OrderSummary.css";

function OrderSummary(props) {
  var ingredients = useSelector((state) => state.ingredients.ingredients);

  const ingredientSummary = Object.keys(ingredients).map((value, index) => {
    return <li key={value}>{value}: {ingredients[value]}</li>;
  });
  return (
    <div>
      <h5>Your Order</h5>
      <ul className="list">{ingredientSummary}</ul>
      <p>Continue to checkout ?</p>
    </div>
  );
}

export default OrderSummary;