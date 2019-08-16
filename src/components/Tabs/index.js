/**
 * Created by starunaway on 2019/7/18.
 */
import React from "react";
import "./style.less";

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    let value = Array.isArray(props.value)
      ? props.value
      : props.value
      ? [props.value]
      : [];
    this.Determine(value, props.disabledItem);
    this.isMulti(value);
    value = value.length === 0 && props.showAll ? ["ALL"] : value;
    this.state = {
      value
    };
  }

  componentWillReceiveProps(next) {
    if (next.value !== this.props.value) {
      this.setState({
        value: Array.isArray(next.value) ? next.value : [next.value]
      });
    }
  }

  isMulti = (value) => {
    const { multi } = this.props;
    if (!multi && value.length > 1) {
      throw new Error("未设置multi,但设置了多个选中值");
    }
  };

  Determine = (value, disabledItem) => {
    if (disabledItem) {
      if (disabledItem instanceof Array) {
        disabledItem.forEach((dI) => {
          value.forEach((v) => {
            if (dI === v) {
              throw new Error(dI + " is disabled");
            }
          });
        });
      } else {
        if (value.indexOf(disabledItem) > -1) {
          throw new Error(disabledItem + " is disabled");
        }
      }
    }
  };

  DetermineDisabled = (item) => {
    const { disabledItem } = this.props;
    if (disabledItem instanceof Array) {
      return disabledItem.indexOf(item.key) > -1;
    } else {
      return disabledItem === item.key;
    }
  };

  DetermineChecked = (item) => {
    const { value } = this.state;
    return (value || []).indexOf(item.key) > -1;
  };

  handleClick = (item) => (e) => {
    if (!this.DetermineDisabled(item)) {
      const { multi, showAll, items } = this.props;
      let checkedValue = this.state.value;
      if (multi) {
        // 可多选
        checkedValue = checkedValue.filter((c) => c !== "ALL");
        if (item.key === "ALL") {
          checkedValue = ["ALL"];
        } else {
          if (checkedValue.indexOf(item.key) > -1) {
            checkedValue = checkedValue.filter((c) => c !== item.key);
            checkedValue = Array.isArray(checkedValue)
              ? checkedValue
              : [checkedValue];
          } else {
            checkedValue.push(item.key);
          }
        }

        if (showAll && items.length === checkedValue.length) {
          checkedValue = ["ALL"];
        }
      } else {
        checkedValue = [item.key];
      }

      this.setState({ value: [...checkedValue] }, () => {
        const { onChange } = this.props;
        typeof onChange === "function" &&
          onChange(multi ? checkedValue : checkedValue[0]);
      });
    }
  };

  renderTabItem = (item) => {
    let { disabledTip, itemWidth } = this.props;
    disabledTip = disabledTip ? disabledTip : {};
    let isDisabled = this.DetermineDisabled(item) ? "ss-tab-item-disabled" : "";
    const isChecked = this.DetermineChecked(item) ? "ss-tab-item-checked" : "";
    isDisabled = disabledTip[item.key]
      ? isDisabled
      : `${isDisabled ? "ss-tab-item-disabled-pure" : ""}`;
    return (
      <label
        key={item.key}
        className={`${isDisabled} ${isChecked} ${
          isDisabled && disabledTip[item.key] ? "tooltip" : ""
        }`}
        style={{ width: itemWidth ? itemWidth : "" }}
        data-msg={
          isDisabled && disabledTip[item.key] ? disabledTip[item.key] : null
        }
        onClick={this.handleClick(item)}
      >
        {item.value}
      </label>
    );
  };

  render() {
    const { size, showAll, showAllText, items } = this.props;

    let options = items || [];

    if (showAll) {
      options = [
        { key: "ALL", value: showAllText ? showAllText : "全部" },
        ...items
      ];
    }

    return (
      <div className={`ss-tab-${size ? size : "normal"}`}>
        {options.map(this.renderTabItem)}
      </div>
    );
  }
}

export default Tabs;
