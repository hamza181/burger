import * as constant from "../constant/burger";

export function addIngredient() {
  return {
    type: constant.ADD_INGREDIENT,
  };
}

export function removeIngredient() {
    return {
      type: constant.REMOVE_INGREDIENT,
    };
  }