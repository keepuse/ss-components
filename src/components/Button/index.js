import React from "react";
import "./style.less";

class Button extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  h_click = () => {
    this.setState({ active: true }, () => {
      const { onClick } = this.props;
      typeof onClick === "function" && onClick();
    });
  };

  classname = () => {
    const { theme, disabled, selected, text } = this.props;
    const { active } = this.state;
    if (disabled && selected) {
      throw new Error(`${text}按钮同时具有disabled和selected两种状态！`);
    }
    let className = `ss-button ss-button-${theme ? theme : "green"}`;
    if (disabled) {
      className = `ss-button disabled`;
    }

    if (!disabled && (selected || active)) {
      className = `ss-button selected`;
    }

    return className;
  };

  render() {
    const { children, buttonWidth } = this.props;
    return (
      <button
        className={this.classname()}
        onClick={this.h_click}
        style={{ width: buttonWidth ? buttonWidth : 80 }}
      >
        {children}
      </button>
    );
  }
}

export default Button;
