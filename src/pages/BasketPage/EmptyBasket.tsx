import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import emoji from "./assets/emoji.svg";
import basket from "./assets/basket.svg";

const EmptyBasketBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(55rem, 100%);
  margin: 0 auto;
  padding-top: 10rem;
`;
const EmptyBasketTitle = styled.p`
  position: relative;
  margin-bottom: 1rem;
  padding-right: 4.2rem;
  font-size: var(--font-size-6);
  line-height: var(--line-height-7);
  font-weight: var(--bold-weight);

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 3.2rem;
    height: 3.2rem;
    background: center / contain url("${emoji}") no-repeat;
  }
`;
const EmptyBasketSubtitle = styled.p`
  margin-bottom: 4.7rem;
  font-size: var(--font-size-8);
  line-height: var(--line-height-5);
  color: var(--color-gray-8);
  text-align: center;
`;
const EmptyBasketImage = styled.img`
  width: min(30rem, 100%);
  margin-bottom: 7.4rem;
  object-fit: contain;
`;
const EmptyBasketLink = styled(NavLink)`
  padding: 1.4rem 3rem;
  font-size: var(--font-size-3);
  line-height: var(--line-height-2);
  font-weight: var(--bold-weight);
  color: var(--color-white);
  background-color: var(--color-gray-5);
  border-radius: 3rem;
`;

function EmptyBasket(): JSX.Element {
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

export default EmptyBasket;
