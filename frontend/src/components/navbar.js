import React from 'react'
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const loc = useLocation();
    return (
        <nav className="navbar  navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${loc.pathname ==='/home'?"active":""}`} aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${loc.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <Link className="btn btn-outline-success mx-2" to="/login" role="button">LogIn</Link>
                        <Link className="btn btn-outline-success mx-2" to="/signup" role="button">SignUp</Link>
                    </form>
                </div>
            </div>
        </nav>
    )

}
export default NavBar;