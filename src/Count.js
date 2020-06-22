import React, { Component } from 'react'

export default class Count extends Component {

    constructor(){
        super();
        this.state={
            counter:0
        }
    }
    increment()
    {
        this.setState({
            counter:this.state.counter+1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>this.increment()}>increment</button>
            </div>
        )
    }
}
