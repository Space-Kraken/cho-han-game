import React, { Component } from "react";
import SimpleTextArea from "../../Atoms/TextArea/SimpleTextArea";
import "./ConsoleOut.scss";

export default class ConsoleOut extends Component {
  state = {
    value: "",
  };
  render() {
    return (
      <div className="consoleOut">
        <SimpleTextArea
          readOnly={true}
          rows="7"
          bitBan={this.props.bitBan}
          holder={this.props.holder}
        />
      </div>
    );
  }
}
