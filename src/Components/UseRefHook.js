import React, { useRef, useEffect } from "react";

const UseRefHook = () => {
    const data = useRef(null)
  // useState Hook
  // useState will re-render when the content change and update in UI.

  // useRef Hook
  // useRef Hook doesn't notify you when its content changes. Mutating the(.current)
  // property doesn't cause a re-render
    const handleSubmit = (e) => {
        e.preventDefault()
       data.current.value = 'chaitanya' 
    }  

    useEffect(() => {
        data.current.focus();
    }, [])

  return (
    <>
      <h2>UseRefHook</h2>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <form>
            <input ref={data} type="text" className="form-control" />
            <input className="btn btn-primary mt-2" onClick={(e) => {handleSubmit(e)}} type="submit" />
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default UseRefHook;
