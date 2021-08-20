import * as constant from "../constant/burger";

const totalPrice = {
  bacon: 5,
  salad: 10,
  cheese: 15,
};

const initialState = {
  ingredients: {
    bacon: 0,
    salad: 0,
    cheese: 0,
  },
  totalPrice: 0,
  purchasable: false,
};

export const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case constant.ADD_INGREDIENT:
      return {
        ...state,
        // if we put variable in Object we use [variableNname] this syntax
        // this is called object literals
        ingredients: {
          ...state.ingredients,
          // bacon: state.ingredient.bacon + 1  // same as below
          [action.ing]: state.ingredients[action.ing] + 1,
        },
        totalPrice: state.totalPrice + totalPrice[action.ing],
      };
    case constant.REMOVE_INGREDIENT:
      if (state.ingredients[action.ing] > 0) {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            [action.ing]: state.ingredients[action.ing] - 1,
          },
          totalPrice: state.totalPrice - totalPrice[action.ing],
        };
      }
    case constant.PURCHASABLE:
      return {
        ...state,
        purchasable: action.payload,
      };
    default:
      return state;
  }
};
