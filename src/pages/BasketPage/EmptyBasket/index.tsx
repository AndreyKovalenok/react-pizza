import React from "react";

import basket from "../assets/basket.svg";

import {
  EmptyBasketBanner,
  EmptyBasketImage,
  EmptyBasketLink,
  EmptyBasketSubtitle,
  EmptyBasketTitle,
} from "./styled";

function Index(): JSX.Element {
  return (
    <EmptyBasketBanner>
      <EmptyBasketTitle>Корзина пустая</EmptyBasketTitle>
      <EmptyBasketSubtitle>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </EmptyBasketSubtitle>
      <EmptyBasketImage alt="" src={basket} />
      <EmptyBasketLink to="/">Вернуться назад</EmptyBasketLink>
    </EmptyBasketBanner>
  );
}

export default Index;
