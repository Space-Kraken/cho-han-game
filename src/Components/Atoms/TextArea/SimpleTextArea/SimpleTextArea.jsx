import React, { Component } from "react";
import "./SimpleTextArea.scss";

export default class SimpleTextArea extends Component {
  state = {
    value: null,
    rows: "",
    minRows: 7,
    maxRows: 15,
    bit: false,
  };
  componentWillMount() {
    this.setState({
      rows: this.props.rows,
      value: this.props.val,
      bit: this.props.bitBan,
    });
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    const textareaLineHeight = 25;
    const { minRows, maxRows } = this.state;
    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea
    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    this.setState({
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
    if (this.props.getVal !== null) {
      const { getVal } = this.props;
      getVal(event);
    }
  };
  render() {
    return (
      <textarea
        className="TextArea"
        placeholder={this.props.holder}
        rows={this.state.rows}
        onChange={this.handleChange}
        onClick={this.handleChange}
        disabled={this.props.readOnly}
        value={this.props.val}
      />
    );
  }
}

SimpleTextArea.defaultProps = {
  getVal: null,
  holder: "Write sometihing",
  readOnly: false,
  val: "",
};
