import React from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";

import EmptyBasket from "./EmptyBasket";
import ActiveBasket from "./ActiveBasket";
import { IState } from "../../redux/rootReducer";
import { IBasketItem } from "../../redux/actions/basket";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const mapState = ({ basket }: IState) => {
  return { basket };
};

const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & IBasketItem;

function BasketPage({ basket: { pizzasList } }: Props): JSX.Element {
  return (
    <Section>{!pizzasList.length ? <ActiveBasket /> : <EmptyBasket />}</Section>
  );
}

export default connector(BasketPage);
