import React from "react";
const dataArr = ["Item1", "Item2", "Item3", "Item4"];
class HeaderClass extends React.Component {
  state = {
    banner: "Welcome Message",
    showMenu: false,
  };

  menuToggle = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
    console.log(this);
  };
  changeBanner = () => {
    this.setState({
      banner: "Have a Good Time!",
    });
  };
  render() {
    return (
      <header>
        <nav className="navBar">
          <div className="logo">
            <p>Website Title / Logo</p>
          </div>
          <div className="menu" onClick={this.menuToggle}>
            <i className="ri-menu-line"></i>
          </div>
          <ul
            className={this.state.showMenu ? "navigation active" : "navigation"}
          >
            <li id="closeMenu" onClick={this.menuToggle}>
              <i className="ri-close-line"></i>
            </li>
            {dataArr.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </nav>
        <div className="banner" onClick={this.changeBanner}>
          <h1>{this.state.banner}</h1>
        </div>
      </header>
    );
  }
}

export default HeaderClass;
