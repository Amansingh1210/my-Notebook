import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const [credentials, setCredentials] = useState({email: "", password: ""})
    // const [items, setItems] = useState([]);
    let navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:3000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email: credentials.email, password: credentials.password })
            });
            const json = await response.json();
            console.log(json);
        if (json.success) {
            localStorage.setItem('token', JSON.stringify(json.authToken));
                navigate("/");
            }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

  return ( 
    <div className='container my-4'>
      <form onSubmit={handleSubmit}> 
          <div className="mb-3">
            <h3>
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            </h3>
                  <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <h3>
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            </h3>
                  <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login