import NoteContext from "./Notecontext";
import { useState } from "react";

const NoteState =(props)=>{
    const host = "http://localhost:3000"
    let initialNotes = []
    const  [notes, setNotes] = useState(initialNotes)

    // Fetch note 
    const fetchNotes = async ()=>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxNjMyZGM5ZmJkYTcxZTI3ZGE3YWYxIn0sImlhdCI6MTcxMjczMDg0NH0.rhDC44hh9PAOtHcVJYFRLGoXKPvowiihkSKNwvPtcnQ",
            }
        });
        const json = await response.json(); 
        setNotes(json);
    }
    // Add note 
    const addNote = async (title, description, tag)=>{
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxNjMyZGM5ZmJkYTcxZTI3ZGE3YWYxIn0sImlhdCI6MTcxMjczMDg0NH0.rhDC44hh9PAOtHcVJYFRLGoXKPvowiihkSKNwvPtcnQ",
            },
            body: JSON.stringify({title,description,tag})
        });
        const json = await response.json();
        // const newNote = {
        //     "_id": "6617b43434ec357ce044560421hv9",
        //     "user": "6616324dc9fbda71e27da7af1",
        //     "title": title,
        //     "description": description,
        //     "tag": tag,
        //     "timestamp": "2024-04-11T10:01:16.609Z",
        //     "__v": 0
        // }
        console.log(json);
        setNotes(notes.concat(json))
    }
    // Edit note 
    const editNote = async (id , title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxNjMyZGM5ZmJkYTcxZTI3ZGE3YWYxIn0sImlhdCI6MTcxMjczMDg0NH0.rhDC44hh9PAOtHcVJYFRLGoXKPvowiihkSKNwvPtcnQ",
            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = await response.json();
        console.log(json);
        setNotes(notes.concat(json))
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
            
        }
    }
    
    // Delete node
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxNjMyZGM5ZmJkYTcxZTI3ZGE3YWYxIn0sImlhdCI6MTcxMjczMDg0NH0.rhDC44hh9PAOtHcVJYFRLGoXKPvowiihkSKNwvPtcnQ",
            }
        });
        const json = await response.json();
        // setNotes(json);
    
        console.log("Notes is deleted "+ id);
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