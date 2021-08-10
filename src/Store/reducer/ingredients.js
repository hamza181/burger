import * as constant from "../constant/burger";

const initialState = {
  bacon: 1,
  salad: 1,
  cheese: 1,
};

export const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case constant.ADD_INGREDIENT:
      // console.log(action.ing);
      return {
        ...state,
        // if we put variable in Object we use [variableNname] this syntax
        // this is called object literals
        // bacon: state.bacon + 1  // same as below
        [action.ing]: state[action.ing] + 1,
      };
    case constant.REMOVE_INGREDIENT:
      // console.log(action.ing);
      return {
        ...state,
        [action.ing]: state[action.ing] - 1,
      };
    default:
      return state;
  }
};
