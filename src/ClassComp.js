import React, { Component } from 'react'

class ClassComp extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     count: 0
  //   }
  // }

  state = {
    count: 0
  }


  handleIncrement = () => {
    //never mutate the state directly
    this.setState({count : this.state.count + 1})
  }

  handleDecrement = () => {
    //never mutate the state directly
    this.setState({count : this.state.count - 1})
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <h2> Count: {this.state.count}</h2>
        <button className='btn btn-primary m-1' onClick={this.handleIncrement}>Increment</button>
        <button className='btn btn-danger' onClick={this.handleDecrement}>Decrement</button>
      </div>
    )
  }
}

export default ClassComp