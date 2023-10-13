import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

function Button() {
  return (
    <Link to='#'>
      <button className='btn'>Начать учиться</button>
    </Link>
  );
}

export default Button;
