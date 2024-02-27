import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    //create variables that we need
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    // call the function fo get data whene tha page is loaded
    useEffect(() => {
        // getUsers();
    }, [])

    // This function is for geting all users from data base by the api address then stock it in a variable
    const getUsers = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/users')
        setUsers(response.data);
    };

    // This is the main function for handling sign-in.
    const getSignIn = async (e) => {
        e.preventDefault();
        // Check if any user in the 'users' array matches the provided email and password.
        const userExist = users.map((usr) => usr.email === email && usr.password === password);
        // If a matching user is found, navigate to the '/chatpage' route.
        if (userExist) {
            navigate('/home');
        } else {
            // If no matching user is found, display an alert message.
            alert("there is no user, you can register now")
        }
    };

    return (
        <section className='vh-100'>
            <div className="container h-100">
                <div className="row justify-content-center h-100  align-items-center ">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center text-primary mb-4">Chat App</h2>
                               
                                {/* <form onSubmit={getSignIn}> */}
                                <form>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Sign In</button>

                                </form>
                                <p>Not a member? <Link to={"/Register"}>Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login;
