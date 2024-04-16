import NoteContext from "./Notecontext";
import { useState } from "react";

const NoteState =(props)=>{
    let initialNotes = [
        {
            "_id": "661633209fbda717e27da7af3",
            "user": "661632dc9fbda71e27da7af1",
            "title": "JAVASCRIPT NOTES",
            "description": "Operator and data types ",
            "tag": "MERN STACK",
            "timestamp": "2024-04-10T06:35:12.012Z",
            "__v": 0
        },
        {
            "_id": "6617b2057b8665e01004d1d27",
            "user": "661632dc9fbda71e27da7af1",
            "title": "Java NOTES",
            "description": "Operator and data types ",
            "tag": "Java - Full stack course",
            "timestamp": "2024-04-11T09:48:53.556Z",
            "__v": 0
        },
        {
            "_id": "6617b205657b866e01004d1d27",
            "user": "661632dc9fbda71e27da7af1",
            "title": "Java NOTES",
            "description": "Operator and data types ",
            "tag": "Java - Full stack course",
            "timestamp": "2024-04-11T09:48:53.556Z",
            "__v": 0
        },
        {
            "_id": "6617b205g7b866e01004d1d27",
            "user": "661632dc9fbda71e27da7af1",
            "title": "Java NOTES",
            "description": "Operator and data types ",
            "tag": "Java - Full stack course",
            "timestamp": "2024-04-11T09:48:53.556Z",
            "__v": 0
        },
        {
            "_id": "6617b205756b866e01004d1d27",
            "user": "661632dc9fbda71e27da7af1",
            "title": "Java NOTES",
            "description": "Operator and data types ",
            "tag": "Java - Full stack course",
            "timestamp": "2024-04-11T09:48:53.556Z",
            "__v": 0
        },
        {
            "_id": "6617b20577b866e01004d1d27",
            "user": "661632dc79fbda71e27da7af1",
            "title": "Java NOTES",
            "description": "Operator and data types ",
            "tag": "Java - Full stack course",
            "timestamp": "2024-04-11T09:48:53.556Z",
            "__v": 0
        },
        {
            "_id": "6617b4ec357ce044839204219",
            "user": "661632dc9fbda71e27da7af1",
            "title": "Java Tutorial",
            "description": "Operator and data types ",
            "tag": "Java - Full stack course",
            "timestamp": "2024-04-11T10:01:16.609Z",
            "__v": 0
        }
    ]
    const  [notes, setNotes] = useState(initialNotes)

    // Add note 
    const addNote = (title, description, tag)=>{
        const note = {
            "_id": "6617b43434ec357ce044561839204219",
            "user": "6616324dc9fbda71e27da7af1",
            "title": "Java Tutorial [Added]",
            "description": "Operator and data types [Added] ",
            "tag": "Java - Full stack course",
            "timestamp": "2024-04-11T10:01:16.609Z",
            "__v": 0
        }

        setNotes(notes.concat(note))
    }
    // Edit note 
    const editNote = () => {

    }
    
    // Delete node
    const deleteNote = () => {

    }
    
    return (
        <NoteContext.Provider value={{ notes, setNotes,addNote, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState ;