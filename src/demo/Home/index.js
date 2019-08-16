import React from "react";
import "./style.less";

class Button extends React.PureComponent {
  render() {
    return (
      <div>
        <h4>
          <a href="https://ssui.club/"> 森浦ui </a>
        </h4>
        <h5>目前完成工作进度:</h5>
        <ul>
          <li>Tabs(已完成)</li>
          <li>Button(已完成)</li>
          <li>FolderFrame(开发中)</li>
        </ul>
      </div>
    );
  }
}

export default Button;
