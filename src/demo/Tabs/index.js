import React from "react";
import Tabs from "../../components/Tabs";
import "./style.less";

class DemoTabs extends React.PureComponent {
  render() {
    return (
      <div className="demo-tabs">
        <li key="1">
          <span>normal</span>
          <Tabs items={items} value={"key1"} />
        </li>
        <li key="2">
          <span>big</span>
          <Tabs items={items} value={"key1"} size="big" itemWidth={90} />
        </li>
        <li key="3">
          <span>可多选</span>
          <Tabs items={items} value={["key1", "key2"]} multi />
        </li>
        <li key="4">
          <span>显示全部</span>
          <Tabs items={items} value={"key1"} showAll showAllText="ALL_KEYS" />
        </li>
        <li key="5">
          <span>全部+多选</span>
          <Tabs
            items={items}
            value={["key1", "key2"]}
            multi
            showAll
            showAllText="ALL_KEYS"
          />
        </li>
        <li key="6">
          <span>禁用元素</span>
          <Tabs
            items={items}
            value={"key1"}
            disabledItem={["key4", "key5"]}
            disabledTip={Disabled_Tip}
          />
        </li>
      </div>
    );
  }
}

export default DemoTabs;

const Disabled_Tip = {
  key4: "key4",
  key5: "key5"
};

const items = [
  { key: "key1", value: "key1" },
  { key: "key2", value: "key2" },
  { key: "key3", value: "key3" },
  { key: "key4", value: "key4" },
  { key: "key5", value: "key5" }
];
