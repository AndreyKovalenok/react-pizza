import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { IPizzaState } from "../../../redux/reducers/pizza";
import { IStateInterface } from "../../../redux/rootReducer";

import basketImage from "./basket.svg";

const StyledHeaderBasket = styled.button`
  padding: 1.5rem 2.3rem;
  background-color: var(--color-main);
  border-radius: 3rem;
  color: var(--color-white);
  cursor: pointer;
`;

const TotalPrice = styled.span`
  position: relative;
  margin-right: 1.3rem;
  white-space: nowrap;
`;

const DividingLine = styled.span`
  position: absolute;
  z-index: 1;
  top: 50%;
  right: -1.3rem;
  transform: translateY(-50%);
  width: 0.1rem;
  height: 2.5rem;
  opacity: 0.25;
  background-color: var(--color-white);
`;

const TotalCount = styled.span`
  position: relative;
  margin-left: 1.4rem;
  padding-left: 2.4rem;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 1.6rem;
    height: 1.6rem;
    background: center / contain url("${basketImage}") no-repeat;
  }
`;

function HeaderBasket({ totalPrice, totalCount }: IPizzaState): JSX.Element {
  return (
    <StyledHeaderBasket>
      <TotalPrice>
        {totalPrice} ₽<DividingLine />
      </TotalPrice>
      <TotalCount>{totalCount}</TotalCount>
    </StyledHeaderBasket>
  );
}

function mapStateToProps({ pizza }: IStateInterface) {
  return {
    totalCount: pizza.totalCount,
    totalPrice: pizza.totalPrice,
  };
}

export default connect(mapStateToProps)(HeaderBasket);
