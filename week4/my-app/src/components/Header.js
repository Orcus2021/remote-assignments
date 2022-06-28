import React, { useState } from "react";

const Header = () => {
  const [banner, setBanner] = useState("Welcome Message");
  const [showMenu, setShowMenu] = useState(false);
  const menuToggle = () => {
    setShowMenu((pre) => !pre);
  };
  const changeBanner = () => {
    setBanner((pre) => (pre = "Have a Good Time!"));
  };

  return (
    <header>
      <nav className="navBar">
        <div className="logo">
          <p>Website Title / Logo</p>
        </div>
        <div className="menu" onClick={menuToggle}>
          <i className="ri-menu-line"></i>
        </div>
        <ul className={showMenu ? "navigation active" : "navigation"}>
          <li id="closeMenu" onClick={menuToggle}>
            <i className="ri-close-line"></i>
          </li>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
        </ul>
      </nav>
      <div className="banner" onClick={changeBanner}>
        <h1>{banner}</h1>
      </div>
    </header>
  );
};

export default Header;
