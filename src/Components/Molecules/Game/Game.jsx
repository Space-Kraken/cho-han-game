import React, { Component } from 'react'
import PowerHover from "./../../Atoms/Buttons/PowerButtons/PowerHover";
import "./Game.scss"

export default class Game extends Component {
    render() {
        return (
            <div className={"bg-game-"+"in"}>
                <h2>Cho-Han Bakuchi</h2>
                <div className="btn-group">
                <PowerHover text="iniciar" action={this.props.start}/>
                <PowerHover text="iniciar" action={this.props.start}/>
                </div>
            </div>
        )
    }
}
