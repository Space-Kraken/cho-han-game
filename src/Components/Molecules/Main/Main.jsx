import React, { Component } from 'react'
import PowerButtons from "./../../Atoms/Buttons/PowerButtons/PowerHover";
import "./Main.scss"


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          style: false
        };
      }
    changeState = () =>{
        this.setState({style:true});
        console.log(this.state.style);
        setTimeout(() => {
            this.props.start();
        }, 800);
    }
    render() {
        return (
            <div className={"bg-main-"+(this.state.style?"out":"in")}>
                <h2>Cho-Han Bakuchi</h2>
                <PowerButtons text="iniciar" action={this.changeState}/>
            </div>
        )
    }
}
