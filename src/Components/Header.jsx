import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../CSS/Header.css';
import { NavLink } from 'react-router-dom';
import Logo from '../output-onlinepngtools4.PNG';

export default class Header extends Component
{
    render(){
        return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                        <NavLink className="navbar-brand mx-3" to="/" >
                            <img src = {Logo} alt = "Wlug Logo" height = "50px"  width = "100px" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item px-3">
                                <NavLink className="nav-link active" aria-current="page" to = "/">Home</NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link" to="/">Events</NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link" to="/">Club Service</NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link" to="/">Blogs</NavLink>
                            </li>
                            <li className="nav-item dropdown px-3">
                                <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Members
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className = "py-1"><NavLink className="dropdown-item" style = {{ backgroundColor: 'white', color: 'black' }}  to="/">Assistant Board</NavLink></li>
                                    <li className = "py-1"><NavLink className="dropdown-item" style = {{ backgroundColor: 'white', color: 'black' }}  to="/">Member Board</NavLink></li>
                                    <li className = "py-1"><NavLink className="dropdown-item" style = {{ backgroundColor: 'white', color: 'black' }} to="/">Mentor Board</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link" to = "/">Alumni Portal</NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link" to = "/">Gallery</NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link" to = "/">Contact Us</NavLink>
                            </li>
                        </ul>
                        </div>
                    </nav>
        </>
        );
    }
}