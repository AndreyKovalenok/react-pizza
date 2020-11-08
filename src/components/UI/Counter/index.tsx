import React from "react";

import {
  Count,
  DecrementButton,
  IncrementButton,
  StyledCounter,
} from "./styled";

const Counter = () => {
  return (
    <StyledCounter>
      <DecrementButton type="button" />
      <Count>0</Count>
      <IncrementButton type="button" />
    </StyledCounter>
  );
};

export default Counter;
