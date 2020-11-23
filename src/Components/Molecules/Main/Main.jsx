import React, { Component } from "react";
import PowerButtons from "./../../Atoms/Buttons/PowerButtons/PowerHover";
import CustomInput from "./../../Atoms/Input";
import Snackbar from "@material-ui/core/Snackbar";
import "./Main.scss";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: false,
      amount: "",
      errorInput: false,
      open: false,
    };
  }
  amountVar = 0;

  getBetAmount = (amount) => {
    console.log(amount);
    this.amountVar = amount;
  };

  changeState = () => {
    console.log(this.amountVar);
    if (this.amountVar > 0 && this.amountVar.match(/[0-9]+/)) {
      this.setState({ style: true });
      this.props.amount(this.amountVar);
      console.log(this.state.style);
      setTimeout(() => {
        this.props.start(this.amountVar);
      }, 800);
    } else {
      this.setState({ open: true });
      //   alert("Invalid Amount entry");
    }
  };
  closeModal = () => {
    setTimeout(() => {
      this.setState({ open: false });
    }, 900);
  };
  render() {
    return (
      <div className={"bg-main-" + (this.state.style ? "out" : "in")}>
        <h2>Heads of tails</h2>
        <CustomInput text="Amount" space="50" getAmount={this.getBetAmount} />
        <PowerButtons text="iniciar" action={this.changeState} />
        <Snackbar
          open={this.state.open}
          onClose={this.closeModal}
          message="Invalid amount"
        />
      </div>
    );
  }
}
