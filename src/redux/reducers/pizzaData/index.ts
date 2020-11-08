import image0 from "../../../assets/images/image-0.png";
import image1 from "../../../assets/images/image-1.png";
import image2 from "../../../assets/images/image-2.png";
import image3 from "../../../assets/images/image-3.png";

export const SET_DOUGH = "SET_DOUGH";
export const SET_PIZZA_SIZE = "SET_PIZZA_SIZE";

type DoughType = Array<{
  id: number;
  additionPrice: number;
  title: string;
  enabled: boolean;
  selected: boolean;
}>;
type SizesType = Array<{
  id: number;
  additionPrice: number;
  title: string;
  enabled: boolean;
  selected: boolean;
}>;
export type PizzaItemType = {
  id: number;
  image: string;
  title: string;
  price: number;
  totalPrice: number;
  dough: DoughType;
  sizes: SizesType;
};

const initialState: Array<PizzaItemType> = [
  {
    id: 0,
    image: image0,
    title: "Чизбургер-пицца",
    price: 395,
    totalPrice: 395,
    dough: [
      {
        id: 0,
        additionPrice: 0,
        title: "тонкое",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        additionPrice: 40,
        title: "традиционное",
        enabled: true,
        selected: false,
      },
    ],
    sizes: [
      {
        id: 0,
        additionPrice: 0,
        title: "26 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        additionPrice: 170,
        title: "30 см.",
        enabled: true,
        selected: false,
      },
      {
        id: 2,
        additionPrice: 350,
        title: "40 см.",
        enabled: true,
        selected: false,
      },
    ],
  },
  {
    id: 1,
    image: image1,
    title: "Сырная",
    price: 450,
    totalPrice: 450,
    dough: [
      {
        id: 0,
        additionPrice: 0,
        title: "тонкое",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        additionPrice: 40,
        title: "традиционное",
        enabled: true,
        selected: false,
      },
    ],
    sizes: [
      {
        id: 0,
        additionPrice: 0,
        title: "26 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        additionPrice: 170,
        title: "30 см.",
        enabled: false,
        selected: false,
      },
      {
        id: 2,
        additionPrice: 350,
        title: "40 см.",
        enabled: false,
        selected: false,
      },
    ],
  },
  {
    id: 2,
    image: image2,
    title: "Креветки по-азиатски",
    price: 290,
    totalPrice: 460,
    dough: [
      {
        id: 0,
        additionPrice: 0,
        title: "тонкое",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        additionPrice: 40,
        title: "традиционное",
        enabled: false,
        selected: false,
      },
    ],
    sizes: [
      {
        id: 0,
        additionPrice: 0,
        title: "26 см.",
        enabled: false,
        selected: false,
      },
      {
        id: 1,
        additionPrice: 170,
        title: "30 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 2,
        additionPrice: 350,
        title: "40 см.",
        enabled: false,
        selected: false,
      },
    ],
  },
  {
    id: 3,
    image: image3,
    title: "Сырный цыпленок",
    price: 385,
    totalPrice: 385,
    dough: [
      {
        id: 0,
        additionPrice: 0,
        title: "тонкое",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        additionPrice: 40,
        title: "традиционное",
        enabled: true,
        selected: false,
      },
    ],
    sizes: [
      {
        id: 0,
        additionPrice: 0,
        title: "26 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        additionPrice: 170,
        title: "30 см.",
        enabled: true,
        selected: false,
      },
      {
        id: 2,
        additionPrice: 350,
        title: "40 см.",
        enabled: true,
        selected: false,
      },
    ],
  },
  {
    id: 4,
    image: image0,
    title: "Чизбургер-пицца",
    price: 395,
    totalPrice: 435,
    dough: [
      {
        id: 0,
        additionPrice: 0,
        title: "тонкое",
        enabled: true,
        selected: false,
      },
      {
        id: 1,
        additionPrice: 40,
        title: "традиционное",
        enabled: true,
        selected: true,
      },
    ],
    sizes: [
      {
        id: 0,
        additionPrice: 0,
        title: "26 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        additionPrice: 170,
        title: "30 см.",
        enabled: true,
        selected: false,
      },
      {
        id: 2,
        additionPrice: 350,
        title: "40 см.",
        enabled: true,
        selected: false,
      },
    ],
  },
  {
    id: 5,
    image: image1,
    title: "Сырная",
    price: 450,
    totalPrice: 450,
    dough: [
      {
        id: 0,
        additionPrice: 0,
        title: "тонкое",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        additionPrice: 40,
        title: "традиционное",
        enabled: true,
        selected: false,
      },
    ],
    sizes: [
      {
        id: 0,
        additionPrice: 0,
        title: "26 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        additionPrice: 170,
        title: "30 см.",
        enabled: false,
        selected: false,
      },
      {
        id: 2,
        additionPrice: 350,
        title: "40 см.",
        enabled: false,
        selected: false,
      },
    ],
  },
  {
    id: 6,
    image: image2,
    title: "Креветки по-азиатски",
    price: 290,
    totalPrice: 460,
    dough: [
      {
        id: 0,
        additionPrice: 0,
        title: "тонкое",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        additionPrice: 40,
        title: "традиционное",
        enabled: false,
        selected: false,
      },
    ],
    sizes: [
      {
        id: 0,
        additionPrice: 0,
        title: "26 см.",
        enabled: false,
        selected: false,
      },
      {
        id: 1,
        additionPrice: 170,
        title: "30 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 2,
        additionPrice: 350,
        title: "40 см.",
        enabled: false,
        selected: false,
      },
    ],
  },
  {
    id: 7,
    image: image3,
    title: "Сырный цыпленок",
    price: 385,
    totalPrice: 385,
    dough: [
      {
        id: 0,
        additionPrice: 0,
        title: "тонкое",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        additionPrice: 40,
        title: "традиционное",
        enabled: true,
        selected: false,
      },
    ],
    sizes: [
      {
        id: 0,
        additionPrice: 0,
        title: "26 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        additionPrice: 170,
        title: "30 см.",
        enabled: true,
        selected: false,
      },
      {
        id: 2,
        additionPrice: 350,
        title: "40 см.",
        enabled: true,
        selected: false,
      },
    ],
  },
];

export type PizzaStateType = typeof initialState;

type PizzaPayloadType = {
  pizzaId: number;
  doughId: number;
  sizesId: number;
};
export type PizzaActionType = {
  type: typeof SET_DOUGH | typeof SET_PIZZA_SIZE;
  payload: PizzaPayloadType;
};

const setActivePizzaProp = (
  state: PizzaStateType,
  payload: PizzaPayloadType,
  prop: string,
  id: string
) =>
  state.map((el) => {
    if (el.id === payload.pizzaId) {
      const currentEl = { ...el };
      let additionPrice = 0;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // TODO
      currentEl[prop] = currentEl[prop].map((item) => {
        if (item.selected) {
          currentEl.totalPrice -= item.additionPrice;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // TODO
        if (item.id === payload[id]) {
          additionPrice = item.additionPrice;
          return { ...item, selected: true };
        }
        return { ...item, selected: false };
      });
      currentEl.totalPrice += additionPrice;
      return currentEl;
    }
    return el;
  });

export default function index(
  state = initialState,
  { type, payload }: PizzaActionType
): PizzaStateType {
  switch (type) {
    case SET_DOUGH:
      return setActivePizzaProp(state, payload, "dough", "doughId");
    case SET_PIZZA_SIZE:
      return setActivePizzaProp(state, payload, "sizes", "sizesId");
    default:
      return state;
  }
}
