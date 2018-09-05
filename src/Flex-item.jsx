import React from "react";

class FlexItem extends React.Component {
  render() {
    const { containerStyle, itemStyle } = this.props;
    return (
      <div className={"flexContainer"} style={containerStyle}>
        <div className={"item-1" + " " + itemStyle}>1</div>
        <div className={"item-2" + " " + itemStyle}>2</div>
        <div className={"item-3" + " " + itemStyle}>3</div>
        <div className={"item-4" + " " + itemStyle}>4</div>
        <div className={"item-5" + " " + itemStyle}>5</div>
      </div>
    );
  }
}

export default FlexItem;
