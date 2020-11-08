import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 5.3rem 9.6rem 6.7rem;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.2rem;
`;

export const Tabs = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0 -0.4rem;
`;

export const Content = styled.div``;

export const ContentTitle = styled.p`
  margin-bottom: 3.5rem;
  font-size: var(--font-size-6);
  line-height: var(--line-height-7);
  font-weight: var(--bold-weight);
`;

export const PizzaWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 3.5rem;
  grid-row-gap: 6.5rem;
`;
