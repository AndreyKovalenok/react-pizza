import { combineReducers } from "redux";
import pizza, { IPizzaState } from "./reducers/pizza";
import pizzaData, { IPizzaItem } from "./reducers/pizzaData";

export interface IStateInterface {
  pizza: IPizzaState;
  pizzaData: Array<IPizzaItem>;
}

export interface IActionTypes {
  type: string;
  payload: unknown;
}

const rootReducer = combineReducers({ pizza, pizzaData });

export default rootReducer;
