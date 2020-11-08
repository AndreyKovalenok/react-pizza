import React from "react";
import { connect } from "react-redux";

import { BasketStateType } from "../../../redux/reducers/basket";
import { StateType } from "../../../redux/rootReducer";

import {
  DividingLine,
  StyledHeaderBasket,
  TotalCount,
  TotalPrice,
} from "./styled";

function HeaderBasket({
  totalPrice,
  totalCount,
}: BasketStateType): JSX.Element {
  return (
    <StyledHeaderBasket to="/basketPage">
      <TotalPrice>
        {totalPrice} ₽<DividingLine />
      </TotalPrice>
      <TotalCount>{totalCount}</TotalCount>
    </StyledHeaderBasket>
  );
}

function mapStateToProps({ basket }: StateType) {
  return {
    totalCount: basket.totalCount,
    totalPrice: basket.totalPrice,
    pizzasList: basket.pizzasList,
  };
}

export default connect(mapStateToProps)(HeaderBasket);
