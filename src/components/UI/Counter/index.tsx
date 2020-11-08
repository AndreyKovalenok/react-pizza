import React from "react";

import {
  Count,
  DecrementButton,
  IncrementButton,
  StyledCounter,
} from "./styled";

type CounterType = {
  count: number;
};
const Counter = ({ count }: CounterType): JSX.Element => {
  return (
    <StyledCounter>
      <DecrementButton type="button" />
      <Count>{count}</Count>
      <IncrementButton type="button" />
    </StyledCounter>
  );
};

export default Counter;
