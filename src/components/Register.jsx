import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

function Register() {
    const {createUser} = useContext(AuthContext);
    
  const handleRegister = e=>{
        e.preventDefault()
        const name= e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password);

        // create user in firebase
        createUser(email,password)
            .then(result=>{
                console.log(result.user)
            })
            .catch(error=>{
                console.log(error.message)
            })

    }
  return (
    <div>
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">Register now!</h1>
                
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form className="fieldset" onSubmit={handleRegister}>
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Enter your name" required/>

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required/>

                        <label className="label">Password</label>
                        <input type="password" required name='password' className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Sign up</button>
                    </form>
                    <p>Already have an account? Please <Link to="/login">
                        <button className='btn btn-link'>Login</button>
                    </Link></p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register