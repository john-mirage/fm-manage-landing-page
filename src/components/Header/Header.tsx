import type { Component } from "solid-js";
import Logo from "../Logo";
import "./Header.module.css";

const Header: Component = () => {
  return (
    <header class="header">
      <Logo />
    </header>
  );
};

export default Header;
