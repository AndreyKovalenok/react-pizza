import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { BasketItemType } from "../../../../redux/reducers/basket";
import {
  incrementBasketItemCount,
  decrementBasketItemCount,
  removeBasketElement,
} from "../../../../redux/reducers/basket/actions";

import {
  StyledPizzaItem,
  Image,
  Price,
  Subtitle,
  Title,
  TitleWrapper,
  CounterWrap,
} from "./styled";
import Counter from "../../../../components/UI/Counter";
import ClearButton from "../../../../components/UI/ClearButton";

const mapState = () => {
  return {};
};

const connector = connect(mapState, {
  incrementBasketItemCount,
  decrementBasketItemCount,
  removeBasketElement,
});

type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsType = PropsFromRedux & BasketItemType;

const PizzaItem = ({
  image,
  size: { title: sizeTitle, id: sizeId },
  price,
  pizzaId,
  dough: { title: doughTitle, id: doughId },
  count,
  title,
  incrementBasketItemCount: dispatchIncrementBasketItemCount,
  decrementBasketItemCount: dispatchDecrementBasketItemCount,
  removeBasketElement: dispatchRemoveBasketElement,
}: PropsType): JSX.Element => {
  return (
    <StyledPizzaItem>
      <Image src={image} />
      <TitleWrapper>
        <Title>{title}</Title>
        <Subtitle>
          {doughTitle} тесто, {sizeTitle}
        </Subtitle>
      </TitleWrapper>
      <CounterWrap>
        <Counter
          increment={() => {
            dispatchIncrementBasketItemCount(pizzaId, doughId, sizeId);
          }}
          decrement={() => {
            dispatchDecrementBasketItemCount(pizzaId, doughId, sizeId);
          }}
          count={count}
        />
      </CounterWrap>
      <Price>{price * count} ₽</Price>
      <ClearButton
        onClick={() => {
          dispatchRemoveBasketElement(pizzaId, doughId, sizeId);
        }}
      />
    </StyledPizzaItem>
  );
};

export default connector(PizzaItem);
