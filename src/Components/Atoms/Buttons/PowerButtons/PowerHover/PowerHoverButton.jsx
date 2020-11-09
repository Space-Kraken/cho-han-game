import React, { Component } from "react";
import "./PowerHoverButton.scss";
export default class PowerHoverButton extends Component {
  render() {
    return (
      <div className="middle">
        <button className="test" onClick={this.props.action}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

PowerHoverButton.defaultProps = {
  // action: {()=>{console.info("No action yet")}},
  action: "null",
  text: "test",
};
