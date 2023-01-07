import React, { Fragment } from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals3.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>OrderFast</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Delicious Food" />
      </div>
    </Fragment>
  );
};

export default Header;
