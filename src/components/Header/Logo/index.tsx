import React from "react";

import style from "./style.module.scss";

import logoImage from "../../../assets/images/logo.png";

function Logo(): JSX.Element {
  return (
    <div className={style.logo}>
      <img
        className={style.logoImage}
        src={logoImage}
        alt="React Pizza"
        width="38"
        height="38"
      />
      <div className={style.logoGroup}>
        <h1 className={style.logoTitle}>REACT PIZZA</h1>
        <p className={style.logoSubptitle}>самая вкусная пицца во вселенной</p>
      </div>
    </div>
  );
}

export default Logo;
