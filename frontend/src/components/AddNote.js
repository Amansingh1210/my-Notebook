import React,{useContext, useState} from 'react'
import contextValue from '../context/notes/Notecontext';

function AddNote() {
    const context = useContext(contextValue);
    const { addNote } = context;
    const [note, setnote] = useState({title: "",description:"",tag:"default"})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description,note.tag);
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
                  </div>
                  <div className="mb-3">
                      <label htmlFor="description" className="form-label">Description</label>
                      <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                  </div>
                  <button disabled={note.description.length<5 || note.title.length<3} type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
              </form>
          </div>
    </>
  )
}

export default AddNote  