import React, { useContext, useEffect } from 'react'
import contextValue from '../context/notes/Notecontext';
import NoteItem from './NoteItem'

function Notes() {
    const context = useContext(contextValue);
    const { notes, fetchNotes } = context;
    useEffect(() => {    
        fetchNotes();
    })   
    
  return (
    <div className='container my-3' >
        <h2>Your Notes</h2>
          <div className='row  my-3' >
            {notes.map((note)=>{
             return <NoteItem key = {note._id} note={note}/>
            })}   
            </div>
    </div>
  )
}

export default Notes