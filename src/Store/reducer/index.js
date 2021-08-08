import { combineReducers } from "redux";
import { ingredients } from "./ingredients";

export const reducer = combineReducers({
    ingredients: ingredients,
  });