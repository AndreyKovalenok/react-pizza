export const ADD_TO_BASKET = "ADD_TO_BASKET";

export type BasketItemType = {
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
};

const initialState = {
  totalPrice: 0 as number,
  totalCount: 0 as number,
  pizzasList: [] as Array<BasketItemType>,
};

export type BasketStateType = typeof initialState;

export type PayloadType = {
  type: typeof ADD_TO_BASKET;
  payload: BasketItemType;
};

export default function pizza(
  state = initialState,
  { type, payload }: PayloadType
): BasketStateType {
  const setPizzaItem = () => {
    let newPizzasList: Array<BasketItemType> = [];

    /**
     * Проверка на наличие элементов в массиве пиц. Если в массиве есть хотя бы один элемент, проверяется начличие пиццы с таким же id пиццы,
     * теста и размера, если такая пицца имеет, то ее параметры цены и количества изменяются, иначе в массив добавляется новый элемент.
     */
    if (state.pizzasList.length) {
      const currentEL = state.pizzasList.find(
        (el) =>
          el.pizzaId === payload.pizzaId &&
          el.dough.id === payload.dough.id &&
          el.size.id === payload.size.id
      );

      if (currentEL !== undefined) {
        state.pizzasList.forEach((el) => {
          if (
            el.pizzaId === payload.pizzaId &&
            el.dough.id === payload.dough.id &&
            el.size.id === payload.size.id
          ) {
            newPizzasList.push({
              ...el,
              price: el.price + payload.price,
              count: el.count + 1,
            });
          } else {
            newPizzasList.push(el);
          }
        });
      } else {
        newPizzasList = [...state.pizzasList, payload];
      }
    } else {
      newPizzasList.push(payload);
    }

    return newPizzasList;
  };

  switch (type) {
    case ADD_TO_BASKET: {
      const pizzasList = [...setPizzaItem()];
      return {
        ...state,
        totalPrice: pizzasList.reduce((sum, el) => sum + el.price, 0),
        totalCount: pizzasList.reduce((sum, el) => sum + el.count, 0),
        pizzasList,
      };
    }
    default:
      return state;
  }
}
