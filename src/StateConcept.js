import React ,{ Component } from 'react'

class StateConcept extends Component

{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })

    }

    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        return (
        <div>
            <h2 style={{textAlign:"center"}}>{this.state.count}</h2>
            <button onClick={this.increment}>increase</button>
            <button onClick={this.decrement}>decrease</button>


        <h2>{this.props.name} <br/>{this.props.age}</h2>
        </div>

        )
    }
}

export default StateConcept;