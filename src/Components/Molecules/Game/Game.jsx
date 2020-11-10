import React, { Component } from 'react'
import PowerHover from "./../../Atoms/Buttons/PowerButtons/PowerHover";
import {ImagesDir} from "./images.jsx";
import "./Game.scss"

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text:"Cho-Han Bakuchi",
          leftDice: 1,
          rightDice: 1,
          winner:null
        };
    }

    throwDice = (selection) =>{
       const left= Math.floor(Math.random() * (6 - 1))+1;
       const right= Math.floor(Math.random() * (6 - 1))+1;
        console.log("left "+this.state.leftDice +"/"+this.state.rightDice+"right")
        this.getWinner(selection,left,right)
    }

    getWinner = (selection,left,right) =>{
        this.setState({leftDice:left})
        this.setState({rightDice:right })
        let number = left+right;
        console.log("el numero es:" +number)
        console.log("el modulo es:" +number%2)
        switch (selection) {
            case "cho":
                (number%2 === 0)? this.setState({winner:true,text:"Ganaste"}): this.setState({winner:false,text:"Perdiste"});
                (number%2 === 0)? this.props.win():this.props.lose();
                break;
            case "han":
                default:
                (number%2 === 1)? this.setState({winner:true,text:"Ganaste"}): this.setState({winner:false,text:"Perdiste"});
                (number%2 === 0)? this.props.lose():this.props.win();
            break;
        }
        // (this.state.winner)?this.props.lose():this.props.win();
    }

    render() {
        return (
            <div className={"bg-game-in"}>
                <div className="dice-group">
                    <img className="dice" src={ImagesDir[this.state.leftDice]} alt="test"/>
                    <img className="dice" src={ImagesDir[this.state.rightDice]} alt="test"/>
                </div>
                <h2>{this.state.text}</h2>
                <div className="btn-group">
                <PowerHover text="Cho" action={()=> this.throwDice("cho")}/>
                <PowerHover text="Han" action={() => this.throwDice("han")}/>
                </div>
            </div>
        )
    }
}
