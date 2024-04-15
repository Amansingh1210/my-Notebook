import React,{useContext} from 'react'
import contextValue from '../context/notes/Notecontext';

function AddNote() {
    const context = useContext(contextValue);
    const { addnote } = context;

    const onClick = ()=>{
        
    }
  return (
    <>
          <div className='container my-3'>
              <h2>Enter the Note</h2>
              <form>
                  <div className="mb-3">
                      <label htmlFor="title" className="form-label">Note Title</label>
                      <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onClick={onclick}/>
                      {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                  <div className="mb-3">
                      <label htmlFor="desc" className="form-label">Description</label>
                      <input type="text" className="form-control" id="desc" name="desc" onClick={onclick} />
                  </div>
                  <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">allowed</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          </div>
    </>
  )
}

export default AddNote  