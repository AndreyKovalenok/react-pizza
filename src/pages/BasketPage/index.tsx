import React from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";

import Index from "./EmptyBasket";
import ActiveBasket from "./ActiveBasket";
import { StateType } from "../../redux/rootReducer";
import { BasketItemType } from "../../redux/reducers/basket";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 5rem 0;
`;

const mapState = ({ basket }: StateType) => {
  return { basket };
};

const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & BasketItemType;

function BasketPage({ basket: { pizzasList } }: Props): JSX.Element {
  return <Section>{pizzasList.length ? <ActiveBasket /> : <Index />}</Section>;
}

export default connector(BasketPage);
