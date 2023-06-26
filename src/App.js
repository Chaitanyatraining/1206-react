import react from 'react'
import Comptest from './Comptest'
import ClassComp from './ClassComp'
import Stylings from './Stylings'
import { Header } from './Components/Header'
import Footer from './Components/Footer'
import FuncComp from './Components/FuncComp'
import ContactUs from './Components/ContactUs'

const App = () => {

  const data = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "age": 20
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      'age' :15
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      'age':30
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
      'age':17
    },
  ]

  return (
    <center>
      <Header />
      {/* <Comptest /> */}
      {/* <ClassComp /> */}
      {/* <Stylings /> */}
      <ContactUs />
      {/* <FuncComp courseName='ReactJs' courseDuration='3Months' data={data} /> */}
      {/* <Footer /> */}
    </center>
  )
}

export default App