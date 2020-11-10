import React, { Component } from 'react'
import PowerButtons from "./../../Atoms/Buttons/PowerButtons/PowerHover";
import "./Main.scss"
import {ImagesDir} from "./images.jsx";
import SimpleButton from "./../../Atoms/Buttons/SimpleButtons/Button";

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
            <div className={"bg-main-"+(this.state.style?"out":"in")} >        
                <div>
                <SimpleButton size="large" text="Iniciar" action={this.changeState}/>
                </div>    
            </div>
        )
    }
}
