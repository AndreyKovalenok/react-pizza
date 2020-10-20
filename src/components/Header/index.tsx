import React from "react";
import { Switch, Route } from "react-router-dom";

import style from "./style.module.scss";

import Logo from "./Logo";
import HeaderBasket from "./HeaderBasket";

function Header(): JSX.Element {
  return (
    <header className={style.header}>
      <Logo />
      <Switch>
        <Route path="/" exact component={HeaderBasket} />
      </Switch>
    </header>
  );
}

export default Header;
