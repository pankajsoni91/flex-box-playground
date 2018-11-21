import React from "react";
class FlexItem extends React.Component {
  render() {
    const { containerStyle, itemStyle, itemValueStyle } = this.props;

    return (
      <div className="flexContainer" style={containerStyle}>
        <div className="item-1" style={itemValueStyle}>
          1
        </div>
        <div className="item-2">2</div>
        <div className="item-3" style={itemStyle}>
          3
        </div>
        <div className="item-4">4</div>
        <div className="item-5">5</div>
      </div>
    );
  }
}

export default FlexItem;
