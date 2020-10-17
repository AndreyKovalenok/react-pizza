import { combineReducers } from "redux";
import pizza, { PizzaState } from "./reducers/pizza";
import pizzaData, { PizzaItem } from "./reducers/pizzaData";

export interface StateInterface {
  pizza: PizzaState;
  pizzaData: Array<PizzaItem>;
}

export interface ActionTypes {
  type: string;
  payload: unknown;
}

const rootReducer = combineReducers({ pizza, pizzaData });

export default rootReducer;
