import React from 'react'
import profileImg from '../assets/images/2.webp'

function FuncComp(props) {
    const { courseName, courseDuration } = props
    const data = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
        },
        {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            username: "Karianne",
            email: "Julianne.OConner@kory.org",
        },
        {
            id: 5,
            name: "Chelsey Dietrich",
            username: "Kamren",
            email: "Lucio_Hettinger@annie.ca",
        },
    ]

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
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
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