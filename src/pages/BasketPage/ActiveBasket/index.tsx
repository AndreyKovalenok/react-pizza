import React from "react";
import { connect } from "react-redux";

import { StateType } from "../../../redux/rootReducer";
import {
  BasketStateType,
  BasketItemType,
} from "../../../redux/reducers/basket";

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

const mapState = ({ basket }: StateType) => {
  return {
    totalCount: basket.totalCount,
    totalPrice: basket.totalPrice,
    pizzasList: basket.pizzasList,
  };
};

const connector = connect(mapState);

function ActiveBasket({
  totalCount,
  totalPrice,
  pizzasList,
}: BasketStateType): JSX.Element {
  return (
    <StyledActiveBasket>
      <BasketHeader>
        <BasketHeaderTitle>Корзина</BasketHeaderTitle>
        <BasketHeaderClearButton>Очистить корзину</BasketHeaderClearButton>
      </BasketHeader>
      <BasketContent>
        {pizzasList.map(
          ({
            image,
            count,
            dough,
            pizzaId,
            price,
            size,
            title,
          }: BasketItemType) => {
            return (
              <PizzaItem
                key={pizzaId + dough.id + size.id}
                count={count}
                dough={dough}
                pizzaId={pizzaId}
                price={price}
                size={size}
                image={image}
                title={title}
              />
            );
          }
        )}
      </BasketContent>
      <BasketFooter>
        <BasketFooterRow>
          <BasketFooterGroup>
            <BasketFooterGroupTitle>Всего пицц:</BasketFooterGroupTitle>
            <BasketFooterTotalCount>{totalCount} шт.</BasketFooterTotalCount>
          </BasketFooterGroup>
          <BasketFooterGroup>
            <BasketFooterGroupTitle>Сумма заказа:</BasketFooterGroupTitle>
            <BasketFooterTotalPrice>{totalPrice} ₽</BasketFooterTotalPrice>
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

export default connector(ActiveBasket);
