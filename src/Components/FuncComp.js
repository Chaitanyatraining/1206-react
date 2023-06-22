import React from 'react'
import profileImg from '../assets/images/2.webp'

function FuncComp(props) {
    const { courseName, courseDuration, data } = props

    const handleClick = (name) => {
        alert(`${name} congralations you voted..!`)
        // console.log('congralations you voted..!')
    }

    return (
        <div>
            <h2>FuncComp</h2>
            <h4>Today is wednesday</h4>
            <h4>Welcome to {courseName} and the Duration is {courseDuration}</h4>
            <div className='row'>
                {
                    data.map((item) => (
                        <div key={item.id} className='col-md-4 mt-2'>
                            <div class="card" style={{ width: '18rem' }}>
                                <img src={profileImg} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{item.name}</h5>
                                    <p class="card-text">{item.email}</p>
                                    {item.age >= 18 ? 
                                    <a href="#" class="btn btn-primary" onClick={() => {handleClick(item.name)}}>Vote</a>
                                     : <a href="#" class="btn btn-primary disabled">Vote</a>
 }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FuncComp