import axios from "axios";
import React, { useState, useEffect } from "react";
import Burger from "../../Components/Burger/Burger";
import MyForm from "../../Components/Form/MyForm";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Navbar from "../../Layouts/Navbar/Navbar";
import "./Checkout.css";
import instance from "../../axios-orders";
import { useHistory } from "react-router-dom";

function Checkout() {
  const history = useHistory();
  const [data, setData] = useState(null);
  useEffect(() => {
    if (data) {
      console.log(data);
      myOrder();
    }
  }, [data]);

  function myOrder() {
    instance
      .post("/orders.json", data)
      .then((response) =>{
        history.push("/");
        console.log(response.data);
  })}
  return (
    <div>
      <Burger></Burger>
      <div className="mainCheckout">
        <OrderSummary></OrderSummary>
        <div className="checkoutForm">
          <h3>Order Now</h3>
          <MyForm setData={setData}></MyForm>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
