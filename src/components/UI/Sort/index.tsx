import React, { useState } from "react";

import {
  Arrow,
  SortButton,
  SortDropdown,
  SortDropdownButton,
  SortTitle,
  StyledSort,
} from "./styled";

type SortPropsType = {
  list: Array<{ id: number; text: string }>;
};

function Sort({ list }: SortPropsType): JSX.Element {
  const [isDropdownActive, toggleDropdown] = useState<true | false>(false);

  return (
    <StyledSort>
      <Arrow active={isDropdownActive} />
      <SortTitle>Сортировка по:</SortTitle>
      <SortButton onClick={() => toggleDropdown(!isDropdownActive)}>
        популярности
      </SortButton>
      {isDropdownActive && (
        <SortDropdown>
          {list.map(({ id, text }, index) => {
            return (
              <SortDropdownButton
                key={id}
                active={index === 0}
                onClick={() => toggleDropdown(!isDropdownActive)}
              >
                {text}
              </SortDropdownButton>
            );
          })}
        </SortDropdown>
      )}
    </StyledSort>
  );
}

export default Sort;
