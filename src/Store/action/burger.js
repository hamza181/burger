import * as constant from "../constant/burger";

export function addIngredient(addType) {
  return {
    type: constant.ADD_INGREDIENT,
    ing: addType,
  };
}

export function removeIngredient(removeType) {
  return {
    type: constant.REMOVE_INGREDIENT,
    ing: removeType,
  };
}
export function updatePurchasable(prop){
  return {
    type: constant.PURCHASABLE,
    payload: prop
  }
}