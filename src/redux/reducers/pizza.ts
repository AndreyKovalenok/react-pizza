import { ActionTypes } from "../actions/actions";

export interface PizzaState {
  totalPrice: number;
  totalCount: number;
}

const initialState: PizzaState = {
  totalPrice: 530,
  totalCount: 3,
};

export default function pizza(
  state = initialState,
  { type, payload }: ActionTypes
): PizzaState {
  switch (type) {
    default:
      return state;
  }
}
