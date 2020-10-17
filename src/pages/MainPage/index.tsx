import React from "react";
import styled from "styled-components";

import Tab from "../../components/UI/Tab";
import Sort from "../../components/UI/Sort";
import Pizza from "../../components/Pizza";

import image0 from "./image-0.png";
import image1 from "./image-1.png";
import image2 from "./image-2.png";
import image3 from "./image-3.png";

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

function MainPage(): JSX.Element {
  const tabs = [
    { id: 0, text: "Все" },
    { id: 1, text: "Мясные" },
    { id: 2, text: "Вегетарианская" },
    { id: 3, text: "Гриль" },
    { id: 4, text: "Острые" },
    { id: 5, text: "Закрытые" },
  ];
  const pizza = [
    {
      id: 0,
      image: image0,
      title: "Чизбургер-пицца",
      price: 395,
    },
    {
      id: 1,
      image: image1,
      title: "Сырная",
      price: 450,
    },
    {
      id: 2,
      image: image2,
      title: "Креветки по-азиатски",
      price: 290,
    },
    {
      id: 3,
      image: image3,
      title: "Сырный цыпленок",
      price: 385,
    },
    {
      id: 4,
      image: image0,
      title: "Чизбургер-пицца",
      price: 395,
    },
    {
      id: 5,
      image: image1,
      title: "Сырная",
      price: 450,
    },
    {
      id: 6,
      image: image2,
      title: "Креветки по-азиатски",
      price: 290,
    },
    {
      id: 7,
      image: image3,
      title: "Сырный цыпленок",
      price: 385,
    },
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
        <Sort />
      </Controls>
      <Content>
        <ContentTitle>Все пиццы</ContentTitle>
        <PizzaWrap>
          {pizza.map(({ id, image, title, price }) => {
            return <Pizza key={id} image={image} title={title} price={price} />;
          })}
        </PizzaWrap>
      </Content>
    </Section>
  );
}

export default MainPage;
