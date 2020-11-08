import { combineReducers } from "redux";
import basket, { BasketStateType } from "./reducers/basket";
import index, { PizzaStateType } from "./reducers/pizzaData";

export type StateType = {
  basket: BasketStateType;
  pizzaData: PizzaStateType;
};

export interface IActionTypes {
  type: string;
  payload: unknown;
}

const rootReducer = combineReducers({ basket, pizzaData: index });

export default rootReducer;
