interface PizzaState {
  totalPrice: number;
  totalCount: number;
}

interface ActionTypes {
  type: string;
  payload: unknown;
}

const initialState: PizzaState = {
  totalPrice: 520,
  totalCount: 3,
};

export default function pizzaReducer(
  state = initialState,
  { type, payload }: ActionTypes
): PizzaState {
  switch (type) {
    default:
      return state;
  }
}
