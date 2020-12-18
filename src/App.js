import React, { Component } from 'react';
import './App.css';
import Results from './components/Results';
import Keypad from "./components/Keypad";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calc()
        }
        else if(button === "C"){
            this.clear()
        }
        else if(button === "CE"){
            this.backspace()
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calc = () => {
        try {
            this.setState({

                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "e"
            })

        }
    };

    clear = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div className="chance">
                <div className="calculator">
                    <Results result={this.state.result}/>
                    <Keypad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
