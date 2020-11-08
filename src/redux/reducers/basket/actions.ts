import {
  ADD_TO_BASKET,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  CLEAR_BASKET,
  BasketItemType,
} from "./index";

type AddToBasketActionType = {
  type: typeof ADD_TO_BASKET;
  payload: BasketItemType;
};

export function addToBasket(basketItem: BasketItemType): AddToBasketActionType {
  return {
    type: ADD_TO_BASKET,
    payload: basketItem,
  };
}

type IncrementBasketItemCountPayloadType = {
  pizzaId: number;
  dough: { id: number };
  size: { id: number };
};
type IncrementBasketItemCountType = {
  type: typeof INCREMENT_COUNT;

  payload: IncrementBasketItemCountPayloadType;
};

export function incrementBasketItemCount(
  pizzaId: number,
  doughId: number,
  sizeId: number
): IncrementBasketItemCountType {
  return {
    type: INCREMENT_COUNT,
    payload: { pizzaId, dough: { id: doughId }, size: { id: sizeId } },
  };
}

type DecrementBasketItemCountPayloadType = {
  pizzaId: number;
  dough: { id: number };
  size: { id: number };
};
type DecrementBasketItemCountType = {
  type: typeof DECREMENT_COUNT;
  payload: DecrementBasketItemCountPayloadType;
};

export function decrementBasketItemCount(
  pizzaId: number,
  doughId: number,
  sizeId: number
): DecrementBasketItemCountType {
  return {
    type: DECREMENT_COUNT,
    payload: { pizzaId, dough: { id: doughId }, size: { id: sizeId } },
  };
}

export function clearBasket() {
  return {
    type: CLEAR_BASKET,
  };
}
