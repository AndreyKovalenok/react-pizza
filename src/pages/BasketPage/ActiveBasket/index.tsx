import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { StateType } from "../../../redux/rootReducer";
import {
  BasketStateType,
  BasketItemType,
} from "../../../redux/reducers/basket";
import { clearBasket } from "../../../redux/reducers/basket/actions";

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

const mapDispatch = {
  clearBasket,
};

const connector = connect(mapState, mapDispatch);
type PropTypesFromRedux = ConnectedProps<typeof connector>;
type PropTypes = BasketStateType & PropTypesFromRedux;

function ActiveBasket({
  totalCount,
  totalPrice,
  pizzasList,
  clearBasket: dispatchClearBasket,
}: PropTypes): JSX.Element {
  return (
    <StyledActiveBasket>
      <BasketHeader>
        <BasketHeaderTitle>Корзина</BasketHeaderTitle>
        <BasketHeaderClearButton
          onClick={() => {
            dispatchClearBasket();
          }}
        >
          Очистить корзину
        </BasketHeaderClearButton>
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
                key={String(pizzaId) + String(dough.id) + String(size.id)}
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
