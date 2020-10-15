import React from "react";

import style from "./style.module.scss";

import Logo from "./Logo";
import HeaderBasket from "./HeaderBasket";

function Header(): JSX.Element {
  return (
    <header className={style.header}>
      <Logo />
      <HeaderBasket />
    </header>
  );
}

export default Header;
