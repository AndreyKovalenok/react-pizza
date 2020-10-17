export interface IPizzaState {
  totalPrice: number;
  totalCount: number;
}

const initialState: IPizzaState = {
  totalPrice: 530,
  totalCount: 3,
};

export default function pizza(
  state = initialState,
  { type }: { type: string }
): IPizzaState {
  switch (type) {
    default:
      return state;
  }
}
