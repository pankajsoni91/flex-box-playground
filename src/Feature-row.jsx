import React from "react";

class FeatureRow extends React.Component {
  render() {
    const style = this.props.style;
    const radio = this.props.value.map(item => {
      return (
        <div>
          <input
            type="radio"
            value={item}
            name={style}
            id={`${style}_${item}`}
            onChange={e => {
              this.props.onSelect(e.target.value);
            }}
          />
          <label for={`${style}_${item}`}>{item}</label>
        </div>
      );
    });
    return (
      <div style={{ width: "20%" }}>
        <h4>{style}</h4>
        {radio}
      </div>
    );
  }
}

export default FeatureRow;
