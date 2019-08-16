import React from "react";
import Menus from "./Menus";
import Tabs from "./Tabs";
import Button from "./Button";
import "./style.less";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menu: "Tabs"
    };
  }

  h_menu = (menu) => {
    this.setState({
      menu
    });
  };

  render() {
    const { menu } = this.state;
    return (
      <div className="demo">
        <Menus menu={menu} onChange={this.h_menu} />
        <div className="demo-content">
          {menu === "Tabs" && <Tabs />}
          {menu === "Button" && <Button />}
        </div>
      </div>
    );
  }
}

export default App;
