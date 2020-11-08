import { combineReducers } from "redux";
import basket, { BasketStateType } from "./reducers/basket";
import pizzaData, { IPizzaItem } from "./reducers/pizzaData";

export interface IState {
  basket: BasketStateType;
  pizzaData: Array<IPizzaItem>;
}

export interface IActionTypes {
  type: string;
  payload: unknown;
}

const rootReducer = combineReducers({ basket, pizzaData });

export default rootReducer;
