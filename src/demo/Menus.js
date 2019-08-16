import React from "react";

class App extends React.PureComponent {
  h_click = (menu) => () => {
    console.log(menu);
    const { onChange } = this.props;
    typeof onChange === "function" && onChange(menu);
  };
  render() {
    const { menu } = this.props;
    return (
      <div className="demo-menu">
        <ul>
          {MENUS.map((m) => {
            return (
              <li
                key={m}
                className={menu === m ? "active" : ""}
                onClick={this.h_click(m)}
              >
                {m}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

const MENUS = ["Tabs", "FolderFrame", "Button"];
