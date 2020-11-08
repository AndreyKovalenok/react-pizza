import React from "react";
import { connect } from "react-redux";

import Tab from "../../components/UI/Tab";
import Sort from "../../components/UI/Sort";
import Pizza from "./Pizza";

import { StateType } from "../../redux/rootReducer";
import { PizzaItemType } from "../../redux/reducers/pizzaData";

import {
  Content,
  ContentTitle,
  Controls,
  PizzaWrap,
  Section,
  Tabs,
} from "./styled";

function MainPage({ pizzaData }: StateType): JSX.Element {
  const tabs = [
    { id: 0, text: "Все" },
    { id: 1, text: "Мясные" },
    { id: 2, text: "Вегетарианская" },
    { id: 3, text: "Гриль" },
    { id: 4, text: "Острые" },
    { id: 5, text: "Закрытые" },
  ];

  const select = [
    { id: 0, text: "популярности" },
    { id: 1, text: "по цене" },
    { id: 2, text: "по алфавиту" },
  ];

  return (
    <Section>
      <Controls>
        <Tabs>
          {tabs.map(({ id, text }, index) => {
            return (
              <li key={id}>
                <Tab active={index === 0}>{text}</Tab>
              </li>
            );
          })}
        </Tabs>
        <Sort list={select} />
      </Controls>
      <Content>
        <ContentTitle>Все пиццы</ContentTitle>
        <PizzaWrap>
          {pizzaData.map(
            ({
              id,
              image,
              title,
              price,
              totalPrice,
              dough,
              sizes,
            }: PizzaItemType) => {
              return (
                <Pizza
                  key={id}
                  id={id}
                  image={image}
                  title={title}
                  price={price}
                  totalPrice={totalPrice}
                  dough={dough}
                  sizes={sizes}
                />
              );
            }
          )}
        </PizzaWrap>
      </Content>
    </Section>
  );
}

function mapStateToProps({ pizzaData }: StateType) {
  return {
    pizzaData,
  };
}

export default connect(mapStateToProps)(MainPage);
