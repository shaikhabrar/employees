import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const signUpData = {
      username: username,
      email: email,
      password: password
    }
    const Signup = () => {
        axios.post("http://localhost:9002/signUp", signUpData)
            .then(res => {
              alert(res.data.message);
              if (res.data.message === "Signed up successfully"){
                window.location.href = '/';
              }
              
            })
            .catch(error => {
              console.error(error);
            });
          }
          Signup();
  };

  return (
    <div className="signupContainer container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto grayBackground">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6">
            <div className="card1 pb-5">

              <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                <img src="https://i.imgur.com/uNGdWHi.png" className="image" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5">
              <div className="row px-3">
                <label className="mb-1"><h6 className="mb-0 text-sm">Create Username</h6></label>
                <input className="mb-4" type="text" name="username" placeholder="Enter username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="row px-3">
                <label className="mb-1"><h6 className="mb-0 text-sm">Enter Email</h6></label>
                <input className="mb-4"type="email" name="email" placeholder="Enter email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="row px-3">
                <label className="mb-1"><h6 className="mb-0 text-sm">Set Password</h6></label>
                <input type="password" name="password" placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="row my-4 px-3">
                <button type="submit" onClick={handleSubmit} className="btn btn-primary text-center">Signup</button>
              </div>
              <div className="row mb-4 px-3">
                <small className="font-weight-bold">Already have an account? <Link to="/">Login</Link></small>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue py-4">
          <div className="row px-3">
            <small className="ml-4 ml-sm-5 mb-2">Employee Excel Data Extraction</small>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
