import * as constant from "../constant/burger";

const initialState = {
  bacon: 1,
  salad: 1,
  cheese: 1,
};

export const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case constant.ADD_INGREDIENT:
      return {
        ...state,
        bacon: state.bacon + 1,
      };

    default:
      return state;
  }
  // if(){

  // }

  // return state
};
