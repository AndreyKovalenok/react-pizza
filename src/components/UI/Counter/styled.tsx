import styled from "styled-components";

export const StyledCounter = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  position: relative;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border: 0.2rem solid var(--color-main);
  cursor: pointer;
`;
export const DecrementButton = styled(Button)`
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1rem;
    height: 0.2rem;
    background-color: var(--color-main);
    border-radius: 1rem;
  }
`;
export const IncrementButton = styled(Button)`
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 0.2rem;
    background-color: var(--color-main);
    border-radius: 1rem;
  }

  &::before {
    transform: translate(-50%, -50%);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

export const Count = styled.span`
  margin: 0 1.2rem;
  font-size: var(--font-size-7);
  line-height: var(--line-height-5);
  font-weight: var(--bold-weight);
`;
