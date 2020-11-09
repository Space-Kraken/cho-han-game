import React, { Component } from "react";
import PowerButton from "../../Atoms/Buttons/PowerButtons/PowerHover";
import SimpleTextArea from "../../Atoms/TextArea/SimpleTextArea";
import ReplayIcon from "@material-ui/icons/Replay";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import DescriptionIcon from "@material-ui/icons/Description";
import "./Console_In.scss";

export default class ConsoleIn extends Component {
  state = {
    action: "",
    action2: "",
    action3: "",
  };
  componentWillMount() {
    this.setState({
      action: this.props.afd,
      action2: this.props.restart,
      action3: this.props.read,
    });
  }
  change = (event) => {
    const { action } = this.props;
    action(event);
  };
  render() {
    return (
      <div className="console_in">
        <div className="container">
          <PowerButton text={<PlayArrowIcon />} action={this.state.action} />
          <PowerButton
            className="space"
            text={<ReplayIcon />}
            action={this.state.action2}
          />
          <PowerButton
            className="space"
            text={<DescriptionIcon />}
            action={this.state.action3}
          />
        </div>
        <SimpleTextArea
          rows="7"
          getVal={this.change}
          val={this.props.val}
          holder={this.props.holder}
          readOnly={this.props.unactive}
        />
      </div>
    );
  }
}
