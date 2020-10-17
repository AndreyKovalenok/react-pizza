import { SET_DOUGH, SET_PIZZA_SIZE } from "../actions/ACTION_TYPES";

import image0 from "../../pages/MainPage/image-0.png";
import image1 from "../../pages/MainPage/image-1.png";
import image2 from "../../pages/MainPage/image-2.png";
import image3 from "../../pages/MainPage/image-3.png";

export interface IPizzaItem {
  id: number;
  image: string;
  title: string;
  price: number;
  totalPrice: number;
  dough: Array<{
    id: number;
    additionPrice: number;
    title: string;
    enabled: boolean;
    selected: boolean;
  }>;
  sizes: Array<{
    id: number;
    additionPrice: number;
    title: string;
    enabled: boolean;
    selected: boolean;
  }>;
}

const initialState: Array<IPizzaItem> = [
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
export default function pizzaData(
  state = initialState,
  {
    type,
    payload,
  }: {
    type: string;
    payload: {
      pizzaId: number;
      doughId?: number;
      sizesId?: number;
    };
  }
): Array<IPizzaItem> {
  switch (type) {
    case SET_DOUGH:
      return state.map((el) => {
        if (el.id === payload.pizzaId) {
          const currentEl = { ...el };
          let additionPrice = 0;
          const currentElDough = currentEl.dough.map((item) => {
            if (item.selected) {
              currentEl.totalPrice -= item.additionPrice;
            }
            if (item.id === payload.doughId) {
              additionPrice = item.additionPrice;
              return { ...item, selected: true };
            }
            return { ...item, selected: false };
          });
          currentEl.dough = currentElDough;
          currentEl.totalPrice += additionPrice;
          return currentEl;
        }
        return el;
      });
    case SET_PIZZA_SIZE:
      return state.map((el) => {
        if (el.id === payload.pizzaId) {
          const currentEl = { ...el };
          let additionPrice = 0;
          const currentElSize = currentEl.sizes.map((item) => {
            if (item.selected) {
              currentEl.totalPrice -= item.additionPrice;
            }
            if (item.id === payload.sizesId) {
              additionPrice = item.additionPrice;
              return { ...item, selected: true };
            }
            return { ...item, selected: false };
          });
          currentEl.sizes = currentElSize;
          currentEl.totalPrice += additionPrice;
          return currentEl;
        }
        return el;
      });
    default:
      return state;
  }
}
