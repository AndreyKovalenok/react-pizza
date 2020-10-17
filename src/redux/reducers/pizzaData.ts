import { ActionTypes } from "../actions/actions";

import image0 from "../../pages/MainPage/image-0.png";
import image1 from "../../pages/MainPage/image-1.png";
import image2 from "../../pages/MainPage/image-2.png";
import image3 from "../../pages/MainPage/image-3.png";

export interface PizzaItem {
  id: number;
  image: string;
  title: string;
  price: number;
  dough: Array<{
    id: number;
    title: string;
    enabled: boolean;
    selected: boolean;
  }>;
  sizes: Array<{
    id: number;
    title: string;
    enabled: boolean;
    selected: boolean;
  }>;
}

const initialState: Array<PizzaItem> = [
  {
    id: 0,
    image: image0,
    title: "Чизбургер-пицца",
    price: 395,
    dough: [
      {
        id: 0,
        title: "тонкое",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        title: "традиционное",
        enabled: true,
        selected: false,
      },
    ],
    sizes: [
      {
        id: 0,
        title: "26 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        title: "30 см.",
        enabled: true,
        selected: false,
      },
      {
        id: 2,
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
    dough: [
      {
        id: 0,
        title: "тонкое",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        title: "традиционное",
        enabled: true,
        selected: false,
      },
    ],
    sizes: [
      {
        id: 0,
        title: "26 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        title: "30 см.",
        enabled: false,
        selected: false,
      },
      {
        id: 2,
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
    dough: [
      {
        id: 0,
        title: "тонкое",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        title: "традиционное",
        enabled: false,
        selected: false,
      },
    ],
    sizes: [
      {
        id: 0,
        title: "26 см.",
        enabled: false,
        selected: false,
      },
      {
        id: 1,
        title: "30 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 2,
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
    dough: [
      {
        id: 0,
        title: "тонкое",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        title: "традиционное",
        enabled: true,
        selected: false,
      },
    ],
    sizes: [
      {
        id: 0,
        title: "26 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        title: "30 см.",
        enabled: true,
        selected: false,
      },
      {
        id: 2,
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
    dough: [
      {
        id: 0,
        title: "тонкое",
        enabled: true,
        selected: false,
      },
      {
        id: 1,
        title: "традиционное",
        enabled: true,
        selected: true,
      },
    ],
    sizes: [
      {
        id: 0,
        title: "26 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        title: "30 см.",
        enabled: true,
        selected: false,
      },
      {
        id: 2,
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
    dough: [
      {
        id: 0,
        title: "тонкое",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        title: "традиционное",
        enabled: true,
        selected: false,
      },
    ],
    sizes: [
      {
        id: 0,
        title: "26 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        title: "30 см.",
        enabled: false,
        selected: false,
      },
      {
        id: 2,
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
    dough: [
      {
        id: 0,
        title: "тонкое",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        title: "традиционное",
        enabled: false,
        selected: false,
      },
    ],
    sizes: [
      {
        id: 0,
        title: "26 см.",
        enabled: false,
        selected: false,
      },
      {
        id: 1,
        title: "30 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 2,
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
    dough: [
      {
        id: 0,
        title: "тонкое",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        title: "традиционное",
        enabled: true,
        selected: false,
      },
    ],
    sizes: [
      {
        id: 0,
        title: "26 см.",
        enabled: true,
        selected: true,
      },
      {
        id: 1,
        title: "30 см.",
        enabled: true,
        selected: false,
      },
      {
        id: 2,
        title: "40 см.",
        enabled: true,
        selected: false,
      },
    ],
  },
];

export default function pizzaData(
  state = initialState,
  { type, payload }: ActionTypes
): Array<PizzaItem> {
  switch (type) {
    default:
      return state;
  }
}
