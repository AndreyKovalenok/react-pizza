import { SET_DOUGH, SET_PIZZA_SIZE } from "../reducers/pizzaData";

interface IDoughTypePayload {
  pizzaId: number;
  doughId: number;
}

export function setDoughType({
  pizzaId,
  doughId,
}: IDoughTypePayload): {
  type: string;
  payload: IDoughTypePayload;
} {
  return {
    type: SET_DOUGH,
    payload: { pizzaId, doughId },
  };
}

interface IPizzaSizeTypePayload {
  pizzaId: number;
  sizesId: number;
}

export function setPizzaSize({
  pizzaId,
  sizesId,
}: IPizzaSizeTypePayload): {
  type: string;
  payload: IPizzaSizeTypePayload;
} {
  return {
    type: SET_PIZZA_SIZE,
    payload: { pizzaId, sizesId },
  };
}

export default null;
