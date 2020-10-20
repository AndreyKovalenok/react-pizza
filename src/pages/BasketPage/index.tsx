import React from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";

import EmptyBasket from "./EmptyBasket";
import { IState } from "../../redux/rootReducer";
import { IBasketItem } from "../../redux/actions/basket";

const Section = styled.section``;

const mapState = ({ basket }: IState) => {
  return { basket };
};

const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & IBasketItem;

function BasketPage({ basket: { pizzasList } }: Props): JSX.Element {
  return <Section>{!pizzasList.length && <EmptyBasket />}</Section>;
}

export default connector(BasketPage);
