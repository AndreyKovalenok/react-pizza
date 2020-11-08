import styled from "styled-components";

import arrow from "../../../assets/images/dropdown-arrow.svg";

export const StyledSort = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: var(--font-size-2);
  line-height: var(--line-height-1);
`;

type ArrowProps = {
  active: boolean;
};
export const Arrow = styled.span<ArrowProps>`
  width: 1rem;
  height: 0.6rem;
  background: center / contain url("${arrow}") no-repeat;
  transform: ${(p) => !p.active && "rotate(180deg)"};
  transition: 200ms;
`;

export const SortTitle = styled.p`
  margin-left: 0.7rem;
  margin-right: 0.8rem;
  font-weight: var(--bold-weight);
  color: var(--color-gray-4);
`;

export const SortButton = styled.button`
  color: var(--color-main);
  border-bottom: 0.1rem dotted var(--color-main);
`;

export const SortDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.3rem 0;
  background-color: var(--color-white);
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1.5rem var(--color-black-opac-1);
`;

type SortDropdownButtonProps = {
  active: boolean;
};
export const SortDropdownButton = styled.button<SortDropdownButtonProps>`
  width: 100%;
  padding: 1rem 1.4rem;
  text-align: left;
  font-size: var(--font-size-2);
  line-height: var(--line-height-1);
  font-weight: ${(p) => p.active && "var(--bold-weight)"};
  color: ${(p) => p.active && "var(--color-main)"};
  background-color: ${(p) => p.active && "var(--color-main-opac-1)"};
  cursor: pointer;
  transition: 0.2s background-color;
`;
