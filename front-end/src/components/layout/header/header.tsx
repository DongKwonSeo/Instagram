import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrap   ">
        <h1 className="header__logo">
          <img src="../imgs/logo.png" alt="로고 " />
        </h1>
        <Link to="/post" className="header__post">
          게시
        </Link>
      </div>
    </header>
  );
};

export default Header;
