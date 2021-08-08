import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../Layouts/Navbar/Navbar";
import "./home.css";
import {bacon, cheese, salad} from '../../Components/ingredients'

function Home() {
  var myState = useSelector((state) => state.ingredients);
  console.log(myState);

  return (
    <div>
      <Navbar></Navbar>
      <div className="burgerMain">
        <div className="burger">
          <div className="burgerTop"></div>
          {bacon}
          {salad}
          {cheese}

          <div className="burgerBottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
