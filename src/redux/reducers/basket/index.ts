export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";
export const CLEAR_BASKET = "CLEAR_BASKET";

export type BasketItemType = {
  pizzaId: number;
  title: string;
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

export type BasketPayloadType = {
  type:
    | typeof ADD_TO_BASKET
    | typeof INCREMENT_COUNT
    | typeof DECREMENT_COUNT
    | typeof CLEAR_BASKET;
  payload: BasketItemType;
};

export default function pizza(
  state = initialState,
  { type, payload }: BasketPayloadType
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
              count: el.count + 1,
            });
          } else {
            newPizzasList.push(el);
          }
        });
      } else {
        newPizzasList = [...state.pizzasList, { ...payload }];
      }
    } else {
      newPizzasList.push({ ...payload });
    }

    return newPizzasList;
  };

  switch (type) {
    case ADD_TO_BASKET: {
      const pizzasList = [...setPizzaItem()];
      return {
        ...state,
        totalPrice: pizzasList.reduce(
          (sum, el) => sum + el.price * el.count,
          0
        ),
        totalCount: pizzasList.reduce((sum, el) => sum + el.count, 0),
        pizzasList,
      };
    }
    case INCREMENT_COUNT: {
      const pizzasList = state.pizzasList.map((el: BasketItemType) => {
        if (
          el.pizzaId === payload.pizzaId &&
          el.dough.id === payload.dough.id &&
          el.size.id === payload.size.id
        ) {
          return {
            ...el,
            count: el.count + 1,
          };
        }
        return el;
      });
      return {
        ...state,
        pizzasList,
        totalPrice: pizzasList.reduce(
          (sum, el) => sum + el.price * el.count,
          0
        ),
        totalCount: pizzasList.reduce((sum, el) => sum + el.count, 0),
      };
    }
    case DECREMENT_COUNT: {
      const pizzasList = state.pizzasList.map((el: BasketItemType) => {
        if (
          el.pizzaId === payload.pizzaId &&
          el.dough.id === payload.dough.id &&
          el.size.id === payload.size.id &&
          el.count > 0
        ) {
          return {
            ...el,
            count: el.count - 1,
          };
        }
        return el;
      });
      return {
        ...state,
        pizzasList,
        totalPrice: pizzasList.reduce(
          (sum, el) => sum + el.price * el.count,
          0
        ),
        totalCount: pizzasList.reduce((sum, el) => sum + el.count, 0),
      };
    }
    case CLEAR_BASKET: {
      return initialState;
    }
    default:
      return state;
  }
}
