import React from 'react'
import NoteContext from '../context/notes/Notecontext'
import { useContext } from 'react'

const  About = () => {
  const user = useContext(NoteContext);
  const a = 34
  return (
    <h1>This is about {user.name}</h1>
  )
}

export default About