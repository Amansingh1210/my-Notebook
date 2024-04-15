import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'

function Home() {
  return (
    <>
      <div className='container'>
        <AddNote/>
        <Notes/>
      </div>
    </>
  )
}

export default Home