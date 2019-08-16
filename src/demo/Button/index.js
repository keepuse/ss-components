import React from "react";
import Button from "../../components/Button";
import "./style.less";

class DemoTabs extends React.PureComponent {
  render() {
    return (
      <div className="demo-buttons">
        <li key="1">
          <Button theme={"green"} buttonWidth={120}>
            theme =green{" "}
          </Button>
        </li>
        <li key="5">
          <Button>没写theme </Button>
        </li>

        <li key="6">
          <Button disabled>disabled</Button>
        </li>

        <li key="7">
          <Button selected>selected </Button>
        </li>

        <li key="2">
          <Button theme={"yellow"} buttonWidth={120}>
            theme = yellow
          </Button>
        </li>
        <li key="3">
          <Button theme={"red"} buttonWidth={120}>
            theme =red
          </Button>
        </li>
        <li key="4">
          <Button theme={"gray"} buttonWidth={120}>
            theme =gray
          </Button>
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
