import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/classComp" className="nav-link">ClassComp</Link>
        </li>
        <li className="nav-item">
          <Link to="/compdidmount" className="nav-link">Mounting</Link>
        </li>
        <li className="nav-item">
          <Link to="/pagination" className="nav-link">Pagination</Link>
        </li>
        <li className="nav-item">
          <Link to="/counterApp" className="nav-link">Counter App</Link>
        </li>
        <li className="nav-item">
          <Link to="/userdatafunc" className="nav-link">UserDataUseEffect</Link>
        </li>
        <li className="nav-item">
          <Link to="/userefhook" className="nav-link">UseRef Hook</Link>
        </li>
        <li className="nav-item">
          <Link to="/usecontexthook" className="nav-link">UseContext Hook</Link>
        </li>
        <li className="nav-item">
          <Link to="/usereducerhook" className="nav-link">UseReducer Hook</Link>
        </li>
        <li className="nav-item">
          <Link to="/contactUs" className="nav-link">ContactUs</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
