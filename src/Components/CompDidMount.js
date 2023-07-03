import React, { Component } from 'react'

class CompDidMount extends Component {
    constructor(props){
        super(props)
        console.log('constructor executed')
    }
    state = {
        userData:[]
    }
 
    static getDerivedStateFromProps(props, state) {
        console.log('static getDerievedStateFromProps')
        return null
    }   

    componentDidMount(){
        console.log('componentDidMount')
        this.getUserData()
    }

    getUserData = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        this.setState({userData: data})
    }  

  render() {
    console.log('render executed')
    return (
      <div>
        <h2>CompDidMount</h2>
        <table className='table-striped border table'>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
            </tr>
            <tbody>
                {
                    this.state.userData && this.state.userData.length > 0 && 
                    this.state.userData.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default CompDidMount