import React,{useContext, useState} from 'react'
import contextValue from '../context/notes/Notecontext';

function AddNote() {
    const context = useContext(contextValue);
    const { addNote } = context;
    const [note, setnote] = useState({title: "",description:"",tag:""})

    const handleClick = (e)=>{
        e.preventDefault()
        addNote(note);
    }
    const onChange = (e)=>{
        setnote({...note, [e.target.name]: e.target.value})
    }
  return (
    <>
          <div className='container my-3'>
              <h2>Enter the Note</h2>
              <form>
                  <div className="mb-3">
                      <label htmlFor="title" className="form-label">Note Title</label>
                      <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
                      {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                  <div className="mb-3">
                      <label htmlFor="description" className="form-label">Description</label>
                      <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                  </div>
                  <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">allowed</label>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
              </form>
          </div>
    </>
  )
}

export default AddNote  