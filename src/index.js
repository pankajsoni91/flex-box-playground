import React from "react";
import ReactDOM from "react-dom";
import FlexItem from "./Flex-item.jsx";
import FeatureRow from "./Feature-row.jsx";

import "./styles.css";

const arr = [
  {
    container: true,
    key: "flex-direction",
    value: ["row", "row-reverse", "column", "column-reverse"]
  },
  {
    container: true,
    key: "alignItems",
    value: ["flex-start", "flex-end", "baseline", "center", "stretch"]
  },
  {
    container: true,
    key: "justifyContent",
    value: ["flex-start", "flex-end", "space-between", "center", "space-around"]
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerStyle: null,
      itemStyle: null
    };
  }

  updateStyle = (container, key) => data => {
    if (container) {
      this.setState({
        ...this.state,
        containerStyle: {
          ...this.state.containerStyle,
          [key]: data
        }
      });
    } else {
      this.setState({
        ...this.state,
        itemStyle: {
          ...this.state.itemStyle,
          [key]: data
        }
      });
    }
    console.log(this.state);
  };

  render() {
    const { containerStyle, itemStyle } = this.state;
    return (
      <div className="app">
        <FlexItem containerStyle={containerStyle} itemStyle={itemStyle} />
        {arr.map(item => {
          return (
            <FeatureRow
              style={item.key}
              value={item.value}
              onSelect={this.updateStyle(item.container, item.key)}
            />
          );
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
