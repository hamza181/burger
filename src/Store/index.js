import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),

    // chrome extension redux devtool ki waja se kya
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
