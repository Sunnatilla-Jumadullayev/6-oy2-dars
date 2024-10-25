import React from "react";
import "./Header.scss";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
// import { TbClock2 } from "react-icons/tb";
let HEADER__LIST = [`Home`, `Brand`, `Recend product`, `Contact`, `About`];

const Header = () => {
  return (
    <header className="">
      <div className="header container">
        <h3 className="header__title">Mohid</h3>
        <ul className="header__list">
          {HEADER__LIST.map((link, index) => {
            return (
              <li key={index} className="header__item">
                {link}
              </li>
            );
          })}
        </ul>
        <div className="header__about">
          <CiSearch className="header__left" />
          <RiAccountCircleLine className="header__left" />
          <FaCartShopping className="header__left" />
        </div>
      </div>
    </header>
  );
};

export default Header;
