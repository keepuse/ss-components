import React from "react";
import "./style.less";

class FolderFrame extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hide: props.hide || false,
      type: props.type || "hide"
    };
  }

  h_click = () => {
    const { hide, type } = this.state;
    this.setState(
      {
        hide: !hide
      },
      () => {
        if (type === "hide" && typeof this.props.onHide === "function") {
          this.props.onHide(hide);
        } else if (type === "open" && typeof this.props.onOpen === "function") {
          this.props.onOpen(hide);
        } else {
          console.warn("type does not match function");
        }
      }
    );
  };

  render() {
    const { position, children, style } = this.props;
    const { hide, type } = this.state;
    let { width, height } = style;

    if (position === "bottom" || position === "top") {
      height = !hide ? height : "14px";
    }

    if (position === "right" || position === "left") {
      width = !hide ? width : "14px";
    }

    console.log(this.props);

    return (
      <div
        className={`folder-frame-${position}-${hide}`}
        style={{ ...style, width, height }}
      >
        <div className={`content-${position}-${hide}`}>{children}</div>
        {hide && <div className={`content-border-${position}-${hide}`} />}
        <div className={`hide-button`} onClick={this.h_click}>
          <span className={`arrow-${position}-hide-${hide}`} />
        </div>
      </div>
    );
  }
}

export default FolderFrame;
