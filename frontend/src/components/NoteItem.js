import React, { useContext } from 'react'
import contextValue from '../context/notes/Notecontext';
import alertValue from '../context/Alerts/Alertcontext'

function NoteItem(props) {
    const context = useContext(contextValue);
    const getalerts = useContext(alertValue);
    const { showalert } = getalerts;
    const { deleteNote } = context;
    const {note, updateNote} = props ;

    const handleEdit = ()=>{
        updateNote(note)
    }
    const handleClick = () => { 
        deleteNote(note._id)
        showalert("Note deleted Successfully", "danger")
    }
   
    return (
        <div className="col-md-3 my-3"> 
        <div className="card mx-3" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <button type="button" className="btn btn-dark mx-1" onClick={handleEdit}><i className="fa-solid fa-pen-to-square mx-2"></i>Edit</button>
                    <button type="button" className="btn btn-dark" onClick={handleClick}><i className="fa-solid fa-trash mx-2" ></i>Delete</button>
                </div>
        </div>
        </div>
    )
}

export default NoteItem 