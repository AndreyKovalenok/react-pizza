import React from "react";
import styled from "styled-components";

import Tab from "../../components/UI/Tab";

const Section = styled.section`
  padding: 4rem 5.3rem 9.6rem 6.7rem;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tabs = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0 -0.4rem;
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
      </Controls>
    </Section>
  );
}

export default MainPage;
