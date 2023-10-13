import React, { useState } from "react";
import { CoursesDropdown } from "../../utils/NavItems";
import { Link } from "react-router-dom";
import "./dropdown.scss";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        className={click ? "dropdown__menu clicked" : "dropdown__menu"}
        onClick={handleClick}
      >
        {CoursesDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
