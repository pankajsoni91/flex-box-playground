import React from "react";
import ReactDOM from "react-dom";
import FlexItem from "./Flex-item.jsx";
import FeatureRow from "./Feature-row.jsx";
import FeatureInput from "./Flex-input.jsx";

import "./styles.css";

const arr = [
  {
    container: true,
    key: "flexDirection",
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
  },
  {
    container: true,
    key: "flexWrap",
    value: ["nowrap", "wrap", "wrap-reverse"]
  },
  {
    container: false,
    key: "alignSelf",
    value: ["auto", "flex-start", "flex-end", "baseline", "center", "stretch"]
  },
  {
    container: "inputVal",
    key: "flexGrow",
    value: ["item-1"]
  },
  {
    container: "inputVal",
    key: "flexShrink",
    value: ["item-1"]
  },
  {
    container: "inputVal",
    key: "order",
    value: ["item-1"]
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerStyle: {
        display: "flex"
      },
      itemStyle: null,
      itemValueStyle: null
    };
  }

  updateStyle = (container, key) => data => {
    if (container === true) {
      this.setState({
        ...this.state,
        containerStyle: {
          ...this.state.containerStyle,
          [key]: data
        }
      });
    } else if (container === "inputVal") {
      this.setState({
        ...this.state,
        itemValueStyle: {
          ...this.state.itemValueStyle,
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
  };

  render() {
    const { containerStyle, itemStyle, itemValueStyle } = this.state;
    return (
      <div className="app">
        <FlexItem
          containerStyle={containerStyle}
          itemStyle={itemStyle}
          itemValueStyle={itemValueStyle}
        />
        <div className="radioWrapper">
          {arr.map(item => {
            return (
              <div className="propertyName" key={item.key}>
                {item.container === "inputVal" ? (
                  <FeatureInput
                    style={item.key}
                    element={item.value}
                    onSelect={this.updateStyle(item.container, item.key)}
                  />
                ) : (
                  <FeatureRow
                    style={item.key}
                    value={item.value}
                    onSelect={this.updateStyle(item.container, item.key)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
