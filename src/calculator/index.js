import React, { Component } from 'react'
import Keypad from './keypad'

export class Index extends Component {
    state={
        result:''
    }

    buttonPressed= (buttonName =>{
        if(buttonName === "="){
            this.calculate();
        } else if(buttonName ==="C" ){
            this.reset();
        } else if(buttonName ==="CE"){
            this.backspace();
        }
        else{
            this.setState({
                result:this.state.result + buttonName
            })
        }
    })

    backspace=()=>{
        this.setState({
            result: this.state.result.slice(0, -1)
        })

    }
    reset=()=>{
        this.setState({
            result: ""
        })
    }
    calculate = ()=>{
        try{
            this.setState({
                result: (eval(this.state.result) || "") + ""                
            })
        } catch (e){
            this.setState({
                result: "error"
            })
        }
    }
    render() {
        return (
            <div className="calc-wrapper">
                <div className="result">
                    <h6>hi</h6>
                    {this.state.result}
                </div>
               <Keypad buttonPressed={this.buttonPressed} />
            </div>
        )
    }
}

export default Index
