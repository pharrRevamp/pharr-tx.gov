import React from "react";
import pharrLogo2018 from "../assets/pharrLogo2018.png";
// import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <header>
        <img src={pharrLogo2018} alt="" />
        <nav>
          <a href="#.">About</a>
          <a href="#.">Business</a>
          <a href="#.">Department</a>
          <a href="#.">Public Safety</a>
          <a href="#.">Quick Access</a>
        </nav>
      </header>
    </div>
  );
}
export default NavBar;
