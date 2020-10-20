import React from "react";
import styled from "styled-components";

import EmptyBasket from "./EmptyBasket";

const Section = styled.section``;

function BasketPage(): JSX.Element {
  return (
    <Section>
      <EmptyBasket />
    </Section>
  );
}

export default BasketPage;
