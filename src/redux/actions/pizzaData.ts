import { SET_DOUGH } from "./ACTION_TYPES";

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

export default null;
