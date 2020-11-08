import styled from "styled-components";
import { NavLink } from "react-router-dom";

import arrow from "../../../assets/images/arrow.svg";
import basketClearIcon from "../../../assets/images/basket-clear.svg";
import basketIcon from "../../../assets/images/basket-icon.svg";

export const BasketFooter = styled.div`
  padding-top: 4rem;
`;

export const BasketFooterGroup = styled.div`
  display: flex;
  font-size: var(--font-size-7);
  line-height: var(--line-height-5);o
`;

export const BasketFooterGroupTitle = styled.p`
  margin-right: 0.4rem;
`;

export const BasketFooterLink = styled(NavLink)`
  position: relative;
  padding: 1.8rem 3.6rem 1.8rem 5rem;
  font-size: var(--font-size-3);
  line-height: var(--line-heigth-2);
  color: var(--color-gray-11);
  border-radius: 3rem;
  border: 0.1rem solid var(--color-gray-12);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 3rem;
    transform: translateY(-50%);
    width: 0.6rem;
    height: 1.2rem;
    background: center / contain url("${arrow}") no-repeat;
  }
`;

export const BasketFooterPayButton = styled.button`
  position: relative;
  padding: 1.8rem 4.4rem;
  font-size: var(--font-size-3);
  line-height: var(--line-heigth-2);
  color: var(--color-white);
  background-color: var(--color-main);
  border-radius: 3rem;
  border: 0.1rem solid var(--color-main);
  cursor: pointer;
`;

export const BasketFooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:first-child) {
    margin-top: 4rem;
  }
`;

export const BasketFooterTotalCount = styled.p`
  font-weight: var(--bold-weight);
`;

export const BasketFooterTotalPrice = styled.p`
  font-weight: var(--bold-weight);
  color: Var(--color-main);
`;

export const BasketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
`;

export const BasketHeaderClearButton = styled.button`
  position: relative;
  padding-left: 2.7rem;
  font-size: var(--font-size-3);
  line-height: var(--line-height-2);
  color: var(--color-gray-10);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 2rem;
    height: 2rem;
    background: center / contain url("${basketClearIcon}") no-repeat;
  }
`;

export const BasketHeaderTitle = styled.p`
  position: relative;
  padding-left: 4.5rem;
  font-size: var(--font-size-6);
  line-height: var(--line-height-7);
  font-weight: var(--bold-weight);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 2.9rem;
    height: 2.9rem;
    background: center / contain url("${basketIcon}") no-repeat;
  }
`;

export const StyledActiveBasket = styled.div`
  width: min(82rem, 100%);
`;

export const BasketContent = styled.div``;
