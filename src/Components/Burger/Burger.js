import React from "react";
import { useSelector } from "react-redux";
import Ingredients from "../Ingredients";

function Burger(props) {
  var ingredients = useSelector((state) => state.ingredients.ingredients);

  // convert object keys in array
  const ingredientKeyArray = Object.keys(ingredients);

  // how to make array with null values
  // this arr make an array with 3 null value
  // let arr = [...Array(3)];
  // console.log(arr);

  // apply map on object keys aur har object key k lye us ki value jitne empty arrays banae

  var tranformedIngredients = ingredientKeyArray
    .map((value, index) => {
      return (
        [...Array(ingredients[value])]
          // now fill empty array with ingredient component
          .map((_, index) => {
            return <Ingredients key={value + index} type={value}></Ingredients>;
          })
      );
    })
    // if all values of ingredient is 0 then reduce array to []
    // argument1 = previous value, argument2 = current value
    .reduce(
      (arr, el) => {
        return arr.concat(el);
      },
      // initial value
      []
    );

  if (tranformedIngredients.length === 0) {
    tranformedIngredients = <p>Please add ingredients</p>;
  }
  return (
    <div>
      <div className="burgerMain">
        <div className="burger">
          <div className="burgerTop"></div>
          {/* <Ingredients type="bacon"></Ingredients>
            <Ingredients type="salad"></Ingredients>
            <Ingredients type="cheese"></Ingredients> */}

          {tranformedIngredients}

          <div className="burgerBottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Burger;
