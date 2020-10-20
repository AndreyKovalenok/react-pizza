import { ADD_TO_BASKET } from "./ACTION_TYPES";

export interface IBasketItem {
  pizzaId: number;
  dough: {
    id: number;
    title: string;
  };
  size: {
    id: number;
    title: string;
  };
  count: number;
  price: number;
  image: string;
}

export function addToBasket(
  basketItem: IBasketItem
): {
  type: string;
  payload: IBasketItem;
} {
  return {
    type: ADD_TO_BASKET,
    payload: basketItem,
  };
}

export default null;
