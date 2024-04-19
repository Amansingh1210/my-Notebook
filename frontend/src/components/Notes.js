import React, { useContext, useEffect , useRef, useState} from 'react'
import contextValue from '../context/notes/Notecontext';
import NoteItem from './NoteItem'
import alertValue from'../context/Alerts/Alertcontext'
import { useNavigate } from 'react-router-dom';

function Notes() {
  const navigate = useNavigate();
  const context = useContext(contextValue);
  const { notes, fetchNotes, editNote } = context;
  const ref = useRef(null);
  const refClose = useRef(null);
  const getalerts = useContext(alertValue);
  const { showalert } = getalerts;
  const [note, setnote] = useState({ id: "" , etitle: "", edescription: "", etag: "default" })

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription);
    refClose.current.click();
    showalert("Note edited Successfully", "success")
  }
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      fetchNotes();
    }
    else{
      navigate('/SignUp')
    }
  })
  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description })

  }

  return (
    <div className='container my-3' >
      <h2>Your Notes</h2>
      <div>
        <button ref={ref} type="button" className="btn btn-primary d-none
          " data-bs-toggle="modal" data-bs-target="#editnote">
        </button>
        <div className="modal fade" id="editnote" tabIndex="-1" aria-labelledby="editnote" aria-hidden="true">
          <div className="modal-dialog  modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="editnote">Edit Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">Note Title</label>
                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} required/>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button disabled={note.edescription.length<5 || note.etitle.length<3} type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row  my-3' >
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </div>
  )
}

export default Notes