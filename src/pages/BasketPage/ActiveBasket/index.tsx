import React from "react";

import {
  BasketFooter,
  BasketFooterGroup,
  BasketFooterGroupTitle,
  BasketFooterPayButton,
  BasketFooterRow,
  BasketFooterLink,
  BasketFooterTotalCount,
  BasketFooterTotalPrice,
  BasketHeader,
  BasketHeaderClearButton,
  BasketHeaderTitle,
  StyledActiveBasket,
  BasketContent,
} from "./styled";
import PizzaItem from "./PizzaItem";

function ActiveBasket(): JSX.Element {
  return (
    <StyledActiveBasket>
      <BasketHeader>
        <BasketHeaderTitle>Корзина</BasketHeaderTitle>
        <BasketHeaderClearButton>Очистить корзину</BasketHeaderClearButton>
      </BasketHeader>
      <BasketContent>
        <PizzaItem />
      </BasketContent>
      <BasketFooter>
        <BasketFooterRow>
          <BasketFooterGroup>
            <BasketFooterGroupTitle>Всего пицц:</BasketFooterGroupTitle>
            <BasketFooterTotalCount>3 шт.</BasketFooterTotalCount>
          </BasketFooterGroup>
          <BasketFooterGroup>
            <BasketFooterGroupTitle>Сумма заказа:</BasketFooterGroupTitle>
            <BasketFooterTotalPrice>900 ₽</BasketFooterTotalPrice>
          </BasketFooterGroup>
        </BasketFooterRow>
        <BasketFooterRow>
          <BasketFooterLink to="/">Вернуться назад</BasketFooterLink>
          <BasketFooterPayButton>Оплатить сейчас</BasketFooterPayButton>
        </BasketFooterRow>
      </BasketFooter>
    </StyledActiveBasket>
  );
}

export default ActiveBasket;
