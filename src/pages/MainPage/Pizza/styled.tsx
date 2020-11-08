import styled from "styled-components";

export const StyledPizza = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28rem;
`;

export const ContentImage = styled.img`
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const PizzaTitle = styled.h3`
  margin-bottom: 2.2rem;
  font-size: var(--font-size-4);
  line-height: var(--font-size-5);
  font-weight: var(--semi-bold-weight);
`;

export const PizzaControls = styled.div`
  width: 100%;
  margin-bottom: 1.7rem;
  padding: 0.7rem 0.4rem;
  background-color: var(--color-gray-7);
  border-radius: 1rem;
`;

export const PizzasRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &:first-child {
    margin-bottom: 0.7rem;
  }
`;

interface ButtonProps {
  active?: boolean;
  enabled?: boolean;
}

export const ControlsButton = styled.button<ButtonProps>`
  flex: 1;
  margin: 0 0.3rem;
  padding: 1rem 0;
  text-align: center;
  font-size: var(--font-size-2);
  line-height: var(--line-height-1);
  font-weight: var(--bold-weight);
  background-color: ${(p) => p.active && "var(--color-white)"};
  border-radius: 0.5rem;
  box-shadow: ${(p) =>
    p.active && "0 0.2rem 0.4rem var(----color-black-opac-3)"};
  cursor: pointer;
  transition: 0.2s background-color;

  &:hover:not(:disabled) {
    background-color: ${(p) => !p.active && "var(--color-whire-opac-1)"};
    border-radous: 0.5rem;
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.2;
    color: var(--color-gray-4);
    cursor: default;
  }
`;

export const PizzaPrice = styled.p`
  font-size: var(--font-size-7);
  line-height: var(--line-height-5);
  font-weight: var(--bold-weight);
`;

export const AddButton = styled.button`
  margin-left: auto;
  padding: 1.1rem 1.8rem 1.1rem 1.7rem;
  font-size: var(--font-size-3);
  line-height: var(--line-height-2);
  font-weight: var(--bold-weight);
  color: var(--color-main);
  border-radius: 3rem;
  border: 0.1rem solid var(--color-main);
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    color: var(--color-white);
    background-color: var(--color-main);
    border-color: var(--color-main);
  }

  &:hover > svg path {
    fill: var(--color-white);
  }
`;

export const AddIcon = styled.svg`
  margin-right: 0.8rem;
`;