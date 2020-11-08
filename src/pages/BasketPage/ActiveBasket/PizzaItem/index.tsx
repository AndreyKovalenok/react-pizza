import React from "react";

import { BasketItemType } from "../../../../redux/reducers/basket";

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

const PizzaItem = ({
  image,
  size: { title: sizeTitle },
  price,
  pizzaId,
  dough: { title: doughTitle },
  count,
  title,
}: BasketItemType) => {
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
        <Counter count={count} />
      </CounterWrap>
      <Price>{price} ₽</Price>
      <ClearButton />
    </StyledPizzaItem>
  );
};

export default PizzaItem;
