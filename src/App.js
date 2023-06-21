import react from 'react'
import Comptest from './Comptest'
import ClassComp from './ClassComp'
import Stylings from './Stylings'
import { Header } from './Components/Header'
import Footer from './Components/Footer'
import FuncComp from './Components/FuncComp'

const App = () => {

  const data = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
    },
  ]

  return (
    <center>
      {/* <Comptest />
      <ClassComp /> */}
      {/* <Stylings /> */}
      <Header />
      <FuncComp courseName='ReactJs' courseDuration='3Months' />
      {/* <Footer /> */}
    </center>
  )
}

export default App