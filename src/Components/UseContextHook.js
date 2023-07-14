import React from 'react'
import CompA from './useContextHook/CompA'
import CompC from './useContextHook/CompC';

export const userContext = React.createContext();

function UseContextHook() {
    // context help you to pass the data througn the component tree without passing 
    // the data as props at each level.
    
  return (
    <>
        <h2>UseContextHook</h2>
        <userContext.Provider value={'ReactJs'}>
            <CompA />
        </userContext.Provider>
    </>
  )
}

export default UseContextHook