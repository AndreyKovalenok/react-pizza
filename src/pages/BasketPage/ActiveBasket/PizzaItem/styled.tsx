import styled from "styled-components";

export const StyledPizzaItem = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem 0;
  border-top: 0.1rem solid var(--color-gray-9);
`;

export const Image = styled.img`
  width: 8rem;
  height: 8rem;
  margin-right: 1.5rem;
`;

export const TitleWrapper = styled.div``;

export const Title = styled.h3`
  margin-bottom: 0.3rem;
  font-size: var(--font-size-7);
  line-height: var(--line-height-5);
  font-weight: var(--bold-weight);
`;

export const Subtitle = styled.p`
  font-size: var(--font-size-8);
  line-height: var(--line-height-3);
  color: var(--color-gray-13);
`;

export const CounterWrap = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

export const Price = styled.span`
  margin-right: 9.3rem;
  font-size: var(--font-size-7);
  line-height: var(--line-height-5);
  font-weight: var(--bold-weight);
`;
