import React, { Component } from "react";

import NavBar from "../navbar/navbar.jsx";

import "./app.css";
import "./responsive.css";

// const header = document.getElementById("header");
// const toggle__header = header.classList.toggle("active");

// const [hamburgerOpen, setHamburgerOpen] = useState(false);
// const toggleHamburger = () => {
//   setHamburgerOpen(!hamburgerOpen);
// };

class WelcomeHi extends Component {
  render() {
    return <NavBar />;
  }
}

export default WelcomeHi;
