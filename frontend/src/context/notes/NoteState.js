
import NoteContext from "./Notecontext";
import { useState } from "react";


const NoteState =(props)=>{
    const host = "http://localhost:3000"
    let initialNotes = []
    const  [notes, setNotes] = useState(initialNotes)
    const token = JSON.parse(localStorage.getItem('token'));
    // Fetch note 
    const fetchNotes = async ()=>{
        if(!token){
            return
        }
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `${token}`,
            }
        });
        const json = await response.json(); 
        setNotes(json);
        // console.log(json);
    }
    // Add note 
    const addNote = async (title, description, tag)=>{
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `${token}`,
            },
            body: JSON.stringify({title,description,tag})
        });
        const note = await response.json();
        setNotes(notes.concat(note))
    }
    // Edit note 
    const editNote = async (id , title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `${token}`,
            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = await response.json();

        let newNote = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < notes.length; index++) {
            const element = newNote[index];
            if(element._id === id){
                newNote.title = title;
                newNote.description = description;
                newNote.tag = tag;
                break;
            }
            setNotes(newNote);
            
        }
    }
    
    // Delete node
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `${token}`,
            }
        });
        const json = await response.json();
    
        const newNote = notes.filter((note)=>{ return note._id !== id});
        setNotes(newNote)
    }
    
    return (
        <NoteContext.Provider value={{ notes, setNotes,addNote, editNote, deleteNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState ;