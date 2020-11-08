import React from "react";

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

const PizzaItem = () => {
  return (
    <StyledPizzaItem>
      <Image />
      <TitleWrapper>
        <Title>Сырный цылпенок</Title>
        <Subtitle>тонкое тесто, 26см</Subtitle>
      </TitleWrapper>
      <CounterWrap>
        <Counter />
      </CounterWrap>
      <Price>770 ₽</Price>
      <ClearButton />
    </StyledPizzaItem>
  );
};

export default PizzaItem;
