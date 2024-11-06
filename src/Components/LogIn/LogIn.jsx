import React from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';


const Loggin = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }
    document.title = "gadget ||login";
    return (

        <div className="flex justify-center items-center min-h-screen bg-gray-100">


            <div className="card w-full max-w-sm shadow-lg bg-base-100 p-6 rounded-lg">

                <div>
                    <button onClick={handleBack} className='flex items-start text-gray-500 font-semibold bg-gray-200 text-center px-4 rounded-full'>Back</button>
                </div>


                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <h3 className='text-center font-semibold text-xl'>Hey Welcome Back</h3>
                <form>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                            required
                        />
                        <label className="label">
                            <span className="label-text-alt">Forgot password?</span>
                        </label>
                    </div>
                    <button className="btn btn-primary w-full">Login</button>
                </form>
                <p className="text-center mt-4">
                    Don’t have an account? <a className="text-primary">Sign up</a>
                </p>
            </div>
        </div>

    );
};

export default Loggin;