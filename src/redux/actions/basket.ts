import { ADD_TO_BASKET } from "./ACTION_TYPES";

export function addToBasket(
  totalPizzaPrice: number
): {
  type: string;
  payload: number;
} {
  return {
    type: ADD_TO_BASKET,
    payload: totalPizzaPrice,
  };
}

export default null;
