import React, { createRef, useState } from "react";
import s from "../style/header.module.css";
import Navigation from "./navigation";
const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const searchInput = createRef();
  function onFormBtnClick(e) {
    e.preventDefault();
    console.log(searchInput.current.value);
    localStorage.setItem("inputValue", JSON.stringify(inputValue));
  }
  function searchInputChange(e) {
    setInputValue(searchInput.current.value);
  }
  return (
    <header className={s.header}>
      <div className={s.logo}>Maxvel</div>
      <Navigation />
    </header>
  );
};

export default Header;

// const input = document.querySelector(input)

// input.addListener("input", onInputChange)

// function onInputChange(e){
//     e.preventDefault()
//     const inputValue = e.currentTarget.value
// }
