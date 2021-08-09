import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Layouts/Navbar/Navbar";
import "./home.css";
import { addIngredient } from "../../Store/action/burger";
import Ingredients from "../../Components/Ingredients";

function Home() {
  var myState = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();
  // console.log(myState);

  // convert object keys in array
  const ingredientKeyArray = Object.keys(myState);
  // console.log(ingredientKeyArray);

  // how to make array with null values
  // this arr make an array with 3 null value
  // let arr = [...Array(3)];
  // console.log(arr);

  // apply map on object keys aur har object key k lye us ki value jitne empty arrays banae 
  const tranformedIngredients = ingredientKeyArray.map((value, index) => {
    return [...Array(myState[value])]
    // now fill empty array with ingredient component
    .map((_, index)=>{
      return <Ingredients key={value + index} type={value}></Ingredients>
  });
})
console.log(tranformedIngredients);

  function addIng() {
    dispatch(addIngredient());
    // console.log(myState.bacon);
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="burgerMain">
        <div className="burger">
          <div className="burgerTop"></div>
{/* 
          <Ingredients type="bacon"></Ingredients>
          <Ingredients type="salad"></Ingredients>
          <Ingredients type="cheese"></Ingredients> */}

{tranformedIngredients}
          <div className="burgerBottom"></div>
        </div>
      </div>
      <button onClick={addIng}>click me</button>
    </div>
  );
}

export default Home;
