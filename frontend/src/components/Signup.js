import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import alertValue from '../context/Alerts/Alertcontext'


function Signup() {
    const [credentials, setCredentials] = useState({ name:"", email: "", password: "" , cpassword: ""})
    let navigate = useNavigate();
    const getalerts = useContext(alertValue)
    const {showalert} = getalerts
    const {name, email, password, cpassword} = credentials;
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== cpassword) {
            showalert("Password Not match","danger")
            return
        }
        const response = await fetch(`http://localhost:3000/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, email, password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token',json.authToken)
            navigate("/login");
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
                        <label htmlFor="name" className="form-label">Name</label>
                    </h3>
                    <input type="text" className="form-control" id="name" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <h3>
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    </h3>
                    <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <h3>
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    </h3>
                    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <h3>
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    </h3>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' value={credentials.cpassword} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup