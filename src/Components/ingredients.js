import React from "react";

function Ingredients(props) {

    let ingredient = null
    
    switch (props.type) {
        case 'bacon':
            ingredient = <div
            style={{
              background: "#982323",
              height: "12px",
              width: "100%",
              borderRadius: "30px",
              margin: "5px 0",
            }}
          ></div>
            break;

            case 'salad':
            ingredient =<div
            style={{
              background: "#2a772a",
              height: "12px",
              width: "90%",
              borderRadius: "30px",
              margin: "5px 0",
            }}
          ></div>
          break;

          case 'cheese':
            ingredient =  <div
            style={{
              background: "#908989",
              height: "12px",
              width: "96%",
              borderRadius: "30px",
              margin: "5px 0",
            }}
          ></div>
          break
    
        default:
            ingredient = null;
    }

    return ingredient
}

export default Ingredients;
