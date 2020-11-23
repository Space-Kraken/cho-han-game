import React, { Component } from "react";
import PowerHover from "./../../Atoms/Buttons/PowerButtons/PowerHover";
import CustomInput from "./../../Atoms/Input";
import Snackbar from "@material-ui/core/Snackbar";
import { ImagesDir } from "./images.jsx";
import "./Game.scss";
import { ButtonGroup } from "@material-ui/core";

// TODO validar el input y arreglar numeros negativos

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Choose one",
      amount: this.props.bet,
      coin: 1,
      winner: null,
      mult: 1,
      start: false,
      open: false,
      snak: "You lose all! try again!",
    };
  }
  staticAmount = this.props.bet;
  text = "";
  amount = this.props.bet;
  round = 0;
  winCounter = 0;
  bet = 0;
  getBetAmount = (bet) => {
    console.log(bet);
    this.bet = bet;
  };

  closeModal = () => {
    setTimeout(() => {
      this.setState({ open: false });
    }, 2000);
  };
  finish = () => {
    alert("La probabilidad de exito fue: " + this.winCounter / 10);
  };

  setWinnerState = (situation) => {
    switch (situation) {
      case "win":
        this.setState({
          winner: true,
          text: "Ganaste",
          amount: this.state.mult * Number(this.bet) + Number(this.amount),
        });
        this.amount = Number(this.amount) + this.state.mult * Number(this.bet);
        if (Number(this.amount) >= Number(this.staticAmount) * 2) {
          this.props.win();
          this.winCounter++;
          this.round++;
          setTimeout(() => {
            this.amount = this.staticAmount;
            this.setState({ start: false });
            this.props.neutral();
          }, 2000);
        }
        break;
      case "lose":
      default:
        this.setState({
          winner: false,
          text: "Perdiste",
          amount: Number(this.amount) - this.state.mult * Number(this.bet),
          mult: this.state.mult * 2,
        });
        this.amount = Number(this.amount) - this.state.mult * Number(this.bet);
        if (this.amount <= 0) {
          this.loseAllBet("You lose All!");
        }
        // this.amount <= 0 ? this.loseAllBet("You lose All!") : this.props.lose();
        break;
    }
    if (this.round === 10) {
      alert("Win-Prob:" + this.winCounter / 10);
    }
  };

  loseAllBet = (text) => {
    this.round++;
    this.props.lose();
    this.setState({ open: true, snak: text });
    setTimeout(() => {
      // this.props.action();
      this.bet = 0;
      this.amount = this.staticAmount;
      this.setState({
        text: "Choose one",
        amount: this.props.bet,
        coin: 1,
        winner: null,
        mult: 1,
        start: false,
        open: false,
        snak: "You lose all! try again!",
      });
      this.text = "";
      this.amount = this.props.bet;
      this.bet = 0;
      this.props.neutral();
    }, 2000);
  };
  selection = "";
  throwDice = (selection) => {
    this.selection = selection;
    if (this.bet === 0) {
      alert("give a number");
    } else {
      this.setState({ start: true });
      console.log(this.bet);
      const coin = Math.floor(Math.random() * (3 - 1)) + 1;
      this.getWinner(selection, coin);
    }
  };

  getWinner = (selection, coin) => {
    this.setState({ coin: coin });
    //? heads => 1 Tails => 2
    switch (selection) {
      case "head":
        coin === 1 ? this.setWinnerState("win") : this.setWinnerState("lose");
        break;
      case "tail":
      default:
        coin === 2 ? this.setWinnerState("win") : this.setWinnerState("lose");
        break;
    }
  };

  render() {
    return (
      <div className={"bg-game-in"}>
        <div className="dice-group">
          <img className="dice" src={ImagesDir[this.state.coin]} alt="test" />
        </div>
        <span>Capital: {this.amount <= 0 ? "0" : this.amount}</span>
        <br />
        {this.state.start ? (
          <React.Fragment>
            <span>Bet: {this.bet * this.state.mult}</span>
            <br />
            <span>Win: {this.winCounter}</span>
            <span> Lose: {this.round - this.winCounter}</span>
          </React.Fragment>
        ) : (
          <CustomInput text="bet" space="20" getAmount={this.getBetAmount} />
        )}
        <h2>{this.state.text}</h2>
        <div className="btn-group">
          {this.state.start ? (
            <PowerHover
              text="Trow again"
              action={() => this.throwDice(this.selection)}
            />
          ) : (
            <ButtonGroup>
              <PowerHover text="Head" action={() => this.throwDice("head")} />
              <PowerHover text="Tail" action={() => this.throwDice("tail")} />
            </ButtonGroup>
          )}
          <Snackbar
            open={this.state.open}
            onClose={this.closeModal}
            message={this.state.snak}
          />
        </div>
      </div>
    );
  }
}
