import styled from "styled-components";

const ClearButton = styled.button`
  position: relative;
  width: 3.2rem;
  height: 3.2rem;
  border: 0.2rem solid var(--color-gray-14);
  border-radius: 50%;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 0.2rem;
    background-color: var(--color-gray-14);
    border-radius: 1rem;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export default ClearButton;
