import React from "react";
import { connect, ConnectedProps } from "react-redux";

import {
  setDoughType,
  setPizzaSize,
} from "../../../redux/reducers/pizzaData/actions";
import { addToBasket } from "../../../redux/reducers/basket/actions";
import { BasketItemType } from "../../../redux/reducers/basket";
import { PizzaItemType } from "../../../redux/reducers/pizzaData";

import {
  AddButton,
  AddIcon,
  ContentImage,
  ControlsButton,
  PizzaControls,
  PizzaPrice,
  PizzasRow,
  PizzaTitle,
  StyledPizza,
} from "./styled";

const mapState = () => {
  return {};
};

const connector = connect(mapState, {
  setDoughType,
  setPizzaSize,
  addToBasket,
});

type PropsFromRedux = ConnectedProps<typeof connector>;

type PropsType = PropsFromRedux & PizzaItemType;

const Pizza = ({
  id,
  image,
  title,
  price,
  totalPrice,
  dough,
  sizes,
  setDoughType: dispatchSetDoughType,
  setPizzaSize: dispatchSetPizzaSize,
  addToBasket: dispatchAddToBasket,
}: PropsType): JSX.Element => {
  const setBasketPropObj = ({
    id: objId,
    title: objTitle,
  }: {
    id: number;
    title: string;
  }) => {
    return {
      id: objId,
      title: objTitle,
    };
  };

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
        <AddButton
          type="button"
          onClick={() =>
            dispatchAddToBasket({
              pizzaId: id,
              dough: setBasketPropObj(
                dough.find(({ selected }) => selected) || {
                  id: dough[0].id,
                  title: dough[0].title,
                }
              ),
              size: setBasketPropObj(
                sizes.find(({ selected }) => selected) || {
                  id: sizes[0].id,
                  title: sizes[0].title,
                }
              ),
              price: totalPrice,
              count: 1,
              image,
            })
          }
        >
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
