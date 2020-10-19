import { ADD_TO_BASKET } from "../actions/ACTION_TYPES";

export interface IBasket {
  totalPrice: number;
  totalCount: number;
}

const initialState: IBasket = {
  totalPrice: 0,
  totalCount: 0,
};

export default function pizza(
  state = initialState,
  { type, payload }: { type: string; payload: number }
): IBasket {
  switch (type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        totalPrice: state.totalPrice + payload,
        totalCount: state.totalCount + 1,
      };
    default:
      return state;
  }
}
