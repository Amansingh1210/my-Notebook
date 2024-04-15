import NoteContext from "./Notecontext";
import { useState } from "react";

const NoteState =(props)=>{
    let initialNotes = [
        {
            "_id": "661633209fbda71e27da7af3",
            "user": "661632dc9fbda71e27da7af1",
            "title": "JAVASCRIPT NOTES",
            "description": "Operator and data types ",
            "tag": "MERN STACK",
            "timestamp": "2024-04-10T06:35:12.012Z",
            "__v": 0
        },
        {
            "_id": "6617b2057b866e01004d1d27",
            "user": "661632dc9fbda71e27da7af1",
            "title": "Java NOTES",
            "description": "Operator and data types ",
            "tag": "Java - Full stack course",
            "timestamp": "2024-04-11T09:48:53.556Z",
            "__v": 0
        },
        {
            "_id": "6617b2057b866e01004d1d27",
            "user": "661632dc9fbda71e27da7af1",
            "title": "Java NOTES",
            "description": "Operator and data types ",
            "tag": "Java - Full stack course",
            "timestamp": "2024-04-11T09:48:53.556Z",
            "__v": 0
        },
        {
            "_id": "6617b2057b866e01004d1d27",
            "user": "661632dc9fbda71e27da7af1",
            "title": "Java NOTES",
            "description": "Operator and data types ",
            "tag": "Java - Full stack course",
            "timestamp": "2024-04-11T09:48:53.556Z",
            "__v": 0
        },
        {
            "_id": "6617b2057b866e01004d1d27",
            "user": "661632dc9fbda71e27da7af1",
            "title": "Java NOTES",
            "description": "Operator and data types ",
            "tag": "Java - Full stack course",
            "timestamp": "2024-04-11T09:48:53.556Z",
            "__v": 0
        },
        {
            "_id": "6617b2057b866e01004d1d27",
            "user": "661632dc9fbda71e27da7af1",
            "title": "Java NOTES",
            "description": "Operator and data types ",
            "tag": "Java - Full stack course",
            "timestamp": "2024-04-11T09:48:53.556Z",
            "__v": 0
        },
        {
            "_id": "6617b4ec37ce044839204219",
            "user": "661632dc9fbda71e27da7af1",
            "title": "Java Tutorial",
            "description": "Operator and data types ",
            "tag": "Java - Full stack course",
            "timestamp": "2024-04-11T10:01:16.609Z",
            "__v": 0
        }
    ]
    const  [notes, setNotes] = useState(initialNotes)

    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState ;