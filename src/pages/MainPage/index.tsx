import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Tab from "../../components/UI/Tab";
import Sort from "../../components/UI/Sort";
import Pizza from "./Pizza";

import { StateType } from "../../redux/rootReducer";
import { PizzaItemType } from "../../redux/reducers/pizzaData";

const Section = styled.section`
  padding: 4rem 5.3rem 9.6rem 6.7rem;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.2rem;
`;

const Tabs = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0 -0.4rem;
`;

const Content = styled.div``;

const ContentTitle = styled.p`
  margin-bottom: 3.5rem;
  font-size: var(--font-size-6);
  line-height: var(--line-height-7);
  font-weight: var(--bold-weight);
`;

const PizzaWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 3.5rem;
  grid-row-gap: 6.5rem;
`;

function MainPage({
  pizzaData,
}: {
  pizzaData: Array<PizzaItemType>;
}): JSX.Element {
  const tabs = [
    { id: 0, text: "Все" },
    { id: 1, text: "Мясные" },
    { id: 2, text: "Вегетарианская" },
    { id: 3, text: "Гриль" },
    { id: 4, text: "Острые" },
    { id: 5, text: "Закрытые" },
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
        <Sort
          list={[
            { id: 0, text: "популярности" },
            { id: 1, text: "по цене" },
            { id: 2, text: "по алфавиту" },
          ]}
        />
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
