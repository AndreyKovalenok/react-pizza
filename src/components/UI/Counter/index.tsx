import React from "react";

import {
  Count,
  DecrementButton,
  IncrementButton,
  StyledCounter,
} from "./styled";

type CounterType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
const Counter = ({ count, increment, decrement }: CounterType): JSX.Element => {
  return (
    <StyledCounter>
      <DecrementButton onClick={decrement} type="button" />
      <Count>{count}</Count>
      <IncrementButton onClick={increment} type="button" />
    </StyledCounter>
  );
};

export default Counter;
