import styled from "styled-components";

interface Props {
  active: boolean;
}

const Tab = styled.button<Props>`
  margin: 0 0.4rem;
  padding: 1.4rem 2.5rem 1.6rem;
  font-size: var(--font-size-3);
  line-height: var(--line-height-2);
  font-weight: var(--bold-weight);
  color: ${(p) => (p.active ? "var(--color-white)" : "var(--color-gray-4)")};
  background-color: ${(p) =>
    p.active ? "var(--color-gray-5)" : "var(--color-gray-6)"};
  border-radius: 3rem;
`;

export default Tab;
