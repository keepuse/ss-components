import React from "react";
import Tabs from "../components/Tabs";

class DemoTabs extends React.PureComponent {
  render() {
    return (
      <div>
        <li>
          <Tabs items={items} value={"key1"} />
        </li>
      </div>
    );
  }
}

export default DemoTabs;

const items = [
  { key: "key1", value: "key1" },
  { key: "key2", value: "key2" },
  { key: "key3", value: "key3" },
  { key: "key4", value: "key4" },
  { key: "key5", value: "key5" }
];
