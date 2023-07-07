import React, { useEffect, useState } from 'react'

const FuncUserData = () => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        //mounting
        getUserData()
    }, [])

    //if you do not pass the dependancy array, when ever the state gets updated the useEffect
    // is called

    const getUserData = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        setUserData(data)
    }  

  return (
    // lifecycle methods
    // mounting, updating, unmounting

    // useState --> state to functional component
    // useEffect --> lifecycle methods to functional component
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
                    userData && userData.length > 0 && 
                    userData.map((item) => (
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

export default FuncUserData
