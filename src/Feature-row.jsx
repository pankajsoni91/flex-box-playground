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
            id={item}
            onChange={e => {
              this.props.onSelect(e.target.value);
            }}
          />
          <label for={item}>{item}</label>
        </div>
      );
    });
    return (
      <div>
        <h4>{style}</h4>
        {radio}
      </div>
    );
  }
}

export default FeatureRow;
