import { Button } from "antd";
import MyModal from "../../Components/UI/Modal/MyModal";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ingredients from "../../Components/Ingredients";
import Navbar from "../../Layouts/Navbar/Navbar";
import {
  addIngredient,
  removeIngredient,
  updatePurchasable,
} from "../../Store/action/burger";
import "./home.css";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";

function Home() {
  var ingredients = useSelector((state) => state.ingredients.ingredients);
  var totalPrice = useSelector((state) => state.ingredients.totalPrice);
  var purchasable = useSelector((state) => state.ingredients.purchasable);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    dispatch(updatePurchasable(false));
  } else {
    dispatch(updatePurchasable(true));
  }

  function addIng(props) {
    var addType = props;
    dispatch(addIngredient(addType));
  }

  function removeIng(props) {
    var removeType = props;
    dispatch(removeIngredient(removeType));
  }

  // useEffect(() => {
  //   updateMyPurchasable();
  // }, [ingredients]);

  // function updateMyPurchasable() {
  //   let arr = Object.keys(ingredients);
  //   let total = 0;
  //   for (let key of arr) {
  //     total = total + ingredients[key];
  //   }
  // if (total > 0) {
  //   dispatch(updatePurchasable(true));
  // } else {
  //   dispatch(updatePurchasable(false));
  // }
  // }

  // function updateMyPurchasable() {
  //   let arr = Object.values(ingredients);
  //   let total = arr.reduce((acc, ele, ind) => {
  //     return acc + ele;
  //   }, 0);
  //   if (total > 0) {
  //     dispatch(updatePurchasable(true));
  //   } else {
  //     dispatch(updatePurchasable(false));
  //   }
  // }

  // disabling less button
  var disable = { ...ingredients };
  for (let key in disable) {
    // if (disable[key] == 0) {
    //   disable[key] = true
    // }
    // else{
    //   disable[key] = false
    // }
    // same as above if else
    disable[key] = disable[key] <= 0;
  }

  const showModal = () => {
    setIsModalVisible(true);
  };
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

      <MyModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
        <OrderSummary></OrderSummary>
      </MyModal>
      <div className="buttonMain">
        <div className="buttons">
          <h4>Add or Remove Ingredients</h4>
          <div className="baconButton">
            <Button disabled={disable.bacon} onClick={() => removeIng("bacon")}>
              Less
            </Button>
            <p>Bacon</p>

            <Button onClick={() => addIng("bacon")}>More</Button>
          </div>
          <div className="saladButton">
            <Button disabled={disable.salad} onClick={() => removeIng("salad")}>
              Less
            </Button>
            <p>Salad</p>
            <Button onClick={() => addIng("salad")}>More</Button>
          </div>
          <div className="cheeseButton">
            <Button
              disabled={disable.cheese}
              onClick={() => removeIng("cheese")}
            >
              Less
            </Button>
            <p>Cheese</p>
            <Button onClick={() => addIng("cheese")}>More</Button>
          </div>
          <p>Total Price: {totalPrice}</p>

          <button disabled={!purchasable} onClick={showModal}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;