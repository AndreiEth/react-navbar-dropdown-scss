import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import "./header.scss";
import Dropdown from "../dropdown/Dropdown";
import Button from "../button/Button";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <header className='header'>
      <nav className='nav'>
        <Logo />
        <ul className={click ? "nav__items active" : "nav__items"}>
          <li className='nav__item'>
            <Link
              to='/articles'
              onClick={closeMobileMenu}
            >
              Статьи <RiArrowDropDownLine className='nav__icon' />
            </Link>
          </li>
          <li
            className='nav__item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/courses'
              onClick={closeMobileMenu}
            >
              Курсы
              {dropdown ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav__item'>
            <Link
              to='/news'
              onClick={closeMobileMenu}
            >
              Новости
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              to='/aboutus'
              onClick={closeMobileMenu}
            >
              О нас
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </header>
  );
}

export default Header;
