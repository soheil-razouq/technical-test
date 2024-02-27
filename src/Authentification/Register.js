import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    //create variables that we need
    const [name, setName] = useState()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // useNavigate is for navigation between the routes
    const navigate = useNavigate();

    // Make an api POST request to create a new user using the axios libraryI 
    const storeUser = async (e) => {
        e.preventDefault();
        // The object sent in the request body
        axios.post('http://127.0.0.1:8000/api/user', { name: name, email: email, password: password });
        // navigate to the '/chatpage' route.
        navigate('/home');
    }
    return (
        <section className='vh-100'>
            <div className="container h-100">
                <div className="row justify-content-center h-100  align-items-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4 text-primary">Chat App</h2>
                                {/* <form onSubmit={storeUser}> */}
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="file" id="file" style={{ display: "none" }} />
                                        <label htmlFor="file" className="d-flex align-items-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png" alt="" className="mr-2" width="30px" height="30px"/>
                                            <span>Add an avatar</span>
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Sign Up
                                    </button>
                                </form>
                                <p className="mt-3">Already have an account? <Link to="/">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};