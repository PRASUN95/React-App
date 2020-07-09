import React, { Component } from 'react';

class StateExample extends Component{

    constructor()
    {
        super()
        this.state = {
            name : "State",
            count : 0
        }
    }
    changeName()
    {
        let vname='';

        if(this.state.name === "State")
        {
            vname = "stateChanged"
        }
        else vname = "State"

        this.setState({
            name : vname
        },() => {
            console.log('name',this.state.name)
        })
      }
    increment()
    {
        // this.setState({
        //     count : this.state.count + 1
        // },() => {
        //     console.log('count',this.state.count)
        // })
        this.setState(prevState => ({
            count : prevState.count + 1
        }))
        console.log(this.state.count)
    }
    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    clickHandler()
    {
        console.log('clicked')
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick = {() => this.changeName()}>Change</button>
                <h1>{this.state.count}</h1>
                <button onClick = {() => this.incrementFive()}>Increment</button>
                <h1>clickHandler</h1>
                <button onClick = {this.clickHandler}>ClickTst</button>
            </div>
        )
    }
}

export default StateExample