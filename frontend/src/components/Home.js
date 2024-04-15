import React from 'react'
import Notes from './Notes'

function Home() {
  return (
    <>
    <div className='container my-3'>
      <h1>Enter the Note</h1> 
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Note Title</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">allowed</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
      <div className='containermy-3 '>
        <Notes/>
      </div>
    </>
  )
}

export default Home