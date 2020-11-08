import { SET_DOUGH, SET_PIZZA_SIZE } from "./index";

type SetDoughTypeActionType = {
  type: typeof SET_DOUGH;
  payload: SetDoughTypePayloadType;
};
type SetDoughTypePayloadType = {
  pizzaId: number;
  doughId: number;
};

export function setDoughType({
  pizzaId,
  doughId,
}: SetDoughTypePayloadType): SetDoughTypeActionType {
  return {
    type: SET_DOUGH,
    payload: { pizzaId, doughId },
  };
}

type SetPizzaSizeActionType = {
  type: typeof SET_PIZZA_SIZE;
  payload: SetPizzaSizePayloadType;
};
type SetPizzaSizePayloadType = {
  pizzaId: number;
  sizesId: number;
};

export function setPizzaSize({
  pizzaId,
  sizesId,
}: SetPizzaSizePayloadType): SetPizzaSizeActionType {
  return {
    type: SET_PIZZA_SIZE,
    payload: { pizzaId, sizesId },
  };
}

export default null;
