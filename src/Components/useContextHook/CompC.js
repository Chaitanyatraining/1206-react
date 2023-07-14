import React from 'react'
import { userContext } from '../UseContextHook'

function CompC() {
  return (
    <>
    <h2>CompC</h2>
    <userContext.Consumer>
        {value => <h4>CourseName : {value}</h4>}
    </userContext.Consumer>
    </>
  )
}

export default CompC