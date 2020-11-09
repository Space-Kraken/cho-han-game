import React, { Component } from "react";
import "./Button.scss";
import "./../../../../SCSS/index.scss";

export default class SimpleButton extends Component {
  render() {
    return (
      <button
        id="btn"
        className={"btn-" + this.props.theme + "-" + this.props.size}
        onClick={this.props.action}
      >
        {this.props.text}
      </button>
    );
  }
}
SimpleButton.defaultProps = {
  theme: "default",
  size: "medium",
  action: null,
  text: "default props works",
};
