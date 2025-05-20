import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    const handleLogin = e=>{
        e.preventDefault()
        const name= e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password);
    }
  return (
    <div>
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">Login now!</h1>
                
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form className="fieldset" onSubmit={handleLogin}>
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Enter your name" required/>

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required/>

                        <label className="label">Password</label>
                        <input type="password" required name='password' className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p>New here? Please <Link to="/register">
                        <button className='btn btn-link'>Register</button>
                    </Link></p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login