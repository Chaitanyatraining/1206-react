import React from 'react'
import './style.css'
import headerstyle from './styling.module.css'

function Stylings() {
    // Inline 
    // Internal 
    // External
    // Module Css
    const obj = {
        style: {
            color:'white',
            backgroundColor:'orange',
            padding: '10px',
            border:'none'
        },
        btnstyle: {
            color:'white',
            backgroundColor:'brown',
            padding: '10px',
            border:'none',
            marginLeft:'10px'
        }
    }
  return (
    <div>
        <h2>Stylings Component</h2>
        <h4 style={{color:'red', backgroundColor: 'green'}}>Inline Style</h4>
        <button style={obj.style}>Click Here</button>
        <button style={obj.btnstyle}>Click Here</button>
        <div className="ext-style">External Stylings</div>
        <h2 className={headerstyle.modulestyle}>Module Stylings</h2>
        <h2 className={headerstyle.reactext}>React TExt</h2>
    </div>
  )
}

export default Stylings