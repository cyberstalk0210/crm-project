import axios from 'axios';
import React,{ useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../utils/api';

const Login = () => {

  const [userData,setUserData]=useState({password:'',username:''});

  
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('userName', userData.username);
  formData.append('password', userData.password);

  try {
    const response = await axios.post('http://localhost:8085/api/auth/login', {
      userName: userData.username,
      password: userData.password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error('Serverdan xato:', error.response);
    } else {
      console.error('Tarmoq yoki boshqa xato:', error.message);
    }
  }
};

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUserData({
      ...userData,[name]:value
    });
  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit} >
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text" name='username'
                  className="form-control"
                  id="username"
                  value={userData.username}
            onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password" name='password'
                  value={userData.password}
                     onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;