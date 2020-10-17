import React from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";

import { setDoughType, setPizzaSize } from "../../redux/actions/pizzaData";

import { IPizzaItem } from "../../redux/reducers/pizzaData";

const StyledPizza = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28rem;
`;

const ContentImage = styled.img`
  object-fit: contain;
  margin-bottom: 1rem;
`;

const PizzaTitle = styled.h3`
  margin-bottom: 2.2rem;
  font-size: var(--font-size-4);
  line-height: var(--font-size-5);
  font-weight: var(--semi-bold-weight);
`;

const PizzaControls = styled.div`
  width: 100%;
  margin-bottom: 1.7rem;
  padding: 0.7rem 0.4rem;
  background-color: var(--color-gray-7);
  border-radius: 1rem;
`;

const PizzasRow = styled.div`
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

const ControlsButton = styled.button<ButtonProps>`
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

const PizzaPrice = styled.p`
  font-size: var(--font-size-7);
  line-height: var(--line-height-5);
  font-weight: var(--bold-weight);
`;

const AddButton = styled.button`
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

const AddIcon = styled.svg`
  margin-right: 0.8rem;
`;

const mapState = () => {
  return {};
};

const mapDispatch = {
  dispatchSetDoughType: ({
    pizzaId,
    doughId,
  }: {
    pizzaId: number;
    doughId: number;
  }) => setDoughType({ pizzaId, doughId }),
  dispatchSetPizzaSize: ({
    pizzaId,
    sizesId,
  }: {
    pizzaId: number;
    sizesId: number;
  }) => setPizzaSize({ pizzaId, sizesId }),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & IPizzaItem;

const Pizza = ({
  id,
  image,
  title,
  price,
  totalPrice,
  dough,
  sizes,
  dispatchSetDoughType,
  dispatchSetPizzaSize,
}: Props): JSX.Element => {
  return (
    <StyledPizza>
      <ContentImage src={image} />
      <PizzaTitle>{title}</PizzaTitle>
      <PizzaControls>
        <PizzasRow>
          {dough.map(
            ({ id: doughId, title: doughTitle, enabled, selected }) => {
              return (
                <ControlsButton
                  key={doughId}
                  active={selected}
                  type="button"
                  disabled={!enabled}
                  onClick={() => {
                    dispatchSetDoughType({ pizzaId: id, doughId });
                  }}
                >
                  {doughTitle}
                </ControlsButton>
              );
            }
          )}
        </PizzasRow>
        <PizzasRow>
          {sizes.map(
            ({ id: sizesId, title: sizesTitle, enabled, selected }) => {
              return (
                <ControlsButton
                  key={sizesId}
                  active={selected}
                  type="button"
                  disabled={!enabled}
                  onClick={() => {
                    dispatchSetPizzaSize({ pizzaId: id, sizesId });
                  }}
                >
                  {sizesTitle}
                </ControlsButton>
              );
            }
          )}
        </PizzasRow>
      </PizzaControls>
      <PizzasRow>
        <PizzaPrice>
          {totalPrice === price ? `от ${totalPrice}` : `за ${totalPrice}`}
        </PizzaPrice>
        <AddButton type="button">
          <AddIcon
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </AddIcon>
          Добавить
        </AddButton>
      </PizzasRow>
    </StyledPizza>
  );
};

export default connector(Pizza);
