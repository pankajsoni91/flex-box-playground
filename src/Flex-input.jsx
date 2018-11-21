import React from "react";

class FeatureInput extends React.Component {
  render() {
    const { style, onSelect, element } = this.props;
    const numberBox = element.map(item => {
      return (
        <div key={item}>
          <label htmlFor={`${style}_${item}`}>{item}</label>
          <br />
          <input
            type="number"
            min="0"
            id={`${style}_${item}`}
            className="numberBox"
            onChange={e => {
              onSelect(e.target.value);
            }}
          />
        </div>
      );
    });
    return (
      <div>
        <h4>{style}</h4>
        <div>{numberBox}</div>
      </div>
    );
  }
}

export default FeatureInput;
