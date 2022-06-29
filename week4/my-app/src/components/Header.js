import React, { useState } from "react";
const dataArr = ["Item1", "Item2", "Item3", "Item4"];
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
          {dataArr.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </nav>
      <div className="banner" onClick={changeBanner}>
        <h1>{banner}</h1>
      </div>
    </header>
  );
};

export default Header;
