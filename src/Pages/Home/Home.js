import { Button } from "antd";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ingredients from "../../Components/Ingredients";
import Navbar from "../../Layouts/Navbar/Navbar";
import { addIngredient, removeIngredient } from "../../Store/action/burger";
import "./home.css";

function Home() {
  var myState = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();
  // console.log(myState);

  const refBacon = useRef(null);
  const refSalad = useRef(null);
  const refCheese = useRef(null);

  // convert object keys in array
  const ingredientKeyArray = Object.keys(myState);
  // console.log(ingredientKeyArray);

  // how to make array with null values
  // this arr make an array with 3 null value
  // let arr = [...Array(3)];
  // console.log(arr);

  // apply map on object keys aur har object key k lye us ki value jitne empty arrays banae
  const tranformedIngredients = ingredientKeyArray
    .map((value, index) => {
      return (
        [...Array(myState[value])]
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
  console.log(tranformedIngredients);

  function addIng(props) {
    // var addType = "bacon";
    var addType = props.current.id;
    console.log(addType);
    // console.log(props);

    dispatch(addIngredient(addType));
    // console.log(myState.bacon);
  }

  function removeIng(props) {
    // var addType = "bacon";
    var removeType = props.current.id;
    console.log(removeType);
    // console.log(props);

    dispatch(removeIngredient(removeType));
    // console.log(myState.bacon);
  }

  return (
    <div>
      <Navbar></Navbar>
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

      <div className="buttonMain">
        <div className="buttons">
          <h4>Add or Remove Ingredients</h4>
          <div className="baconButton">
            <Button type="primary" onClick={()=>{removeIng(refBacon)}}>Less</Button>
            <p>Bacon</p>
            <Button ref={refBacon} id="bacon" onClick={()=>{addIng(refBacon)}}>
              More
            </Button>
          </div>
          <div className="saladButton">
            <Button type="primary">Less</Button>
            <p>Salad</p>
            <Button ref={refSalad} id="salad" onClick={()=>{addIng(refSalad)}}>
              More
            </Button>
          </div>
          <div className="cheeseButton">
            <Button type="primary">Less</Button>
            <p>Cheese</p>
            <Button ref={refCheese} id="cheese" onClick={()=>{addIng(refCheese)}}>
              More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
