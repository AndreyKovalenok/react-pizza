import { ADD_TO_BASKET, BasketItemType } from "./index";

export type AddToBasketActionType = {
  type: typeof ADD_TO_BASKET;
  payload: BasketItemType;
};

export function addToBasket(basketItem: BasketItemType): AddToBasketActionType {
  return {
    type: ADD_TO_BASKET,
    payload: basketItem,
  };
}

export default null;
