import React, { Component } from "react";
import ConsoleIn from "./../../Molecules/ConsoleIn";
import ConsoleOut from "./../../Molecules/ConsoleOut";
import { Main } from "./../../../functions/redirector";
import "./Panel.scss";
class Panel extends Component {
  state = {
    valueIn: "",
    valueOut: "Code Output",
    holder: "Write your code here",
    bitBan: false,
    unactive: false,
  };
  readTextFile = () => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "./text/test.txt", false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          var allText = rawFile.responseText;
          // console.log("allText: ", allText);
          if (allText !== "") {
            this.setState({
              valueIn: allText,
              unactive: true,
            });
          } else {
            this.setState({
              holder: "Text file is empy",
            });
          }
        }
      }
    };
    rawFile.send(null);
  };
  getIn = (event) => {
    this.setState({
      valueIn: event.target.value,
    });
  };
  convert = () => {
    if (this.state.valueIn !== "") {
      let finalCode = Main(this.state.valueIn);
      this.setState({
        valueOut: finalCode,
        bitBan: true,
      });
      this.setState({
        bitBan: false,
      });
      // console.log(finalCode);
    } else {
      this.setState({
        valueOut: "Nothing to compile: code file or code textarea are empy",
        holder: "Hey! Maybe you should try write some code here! :)",
      });
    }
  };
  restart = () => {
    this.setState({
      valueIn: "",
      unactive: false,
      valueOut: "Code Output",
      holder: "Write your code here",
    });
  };
  render() {
    return (
      <div className="panel">
        <ConsoleIn
          action={this.getIn}
          afd={this.convert}
          restart={this.restart}
          val={this.state.valueIn}
          holder={this.state.holder}
          unactive={this.state.unactive}
          read={this.readTextFile}
        />
        <ConsoleOut bitBan={this.state.bitBan} holder={this.state.valueOut} />
      </div>
    );
  }
}
export default Panel;
