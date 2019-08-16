import React from "react";
import Menus from "./Menus";
import Tabs from "./Tabs";
import "./style.less";

class App extends React.PureComponent {
  render() {
    return (
      <div className="demo">
        <Menus />
        <div className="demo-content">
          <Tabs />
        </div>
      </div>
    );
  }
}

export default App;
