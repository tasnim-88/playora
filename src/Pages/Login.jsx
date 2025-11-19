import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Login = () => {

    const [email, setEmail] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const [error, setError] = useState('')
    const { logIn, googleLogin } = use(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password);

        logIn(email, password)
            .then((result) => {
                const user = result.user
                // console.log(user);
                navigate(location.state ? location.state : '/')
            }).catch((error) => {
                const errorCode = error.code
                // console.log(errorCode);
                setError(errorCode)

            })

    }

    // Google login
    const handleGoogleLogin = () => {
        googleLogin().then((result) => {
            const user = result.user;
            // console.log(user);
            navigate(location.state?.from || '/')

        }).catch((error) => {
            const errorCode = error.code;
            // console.log(errorCode);

        })
    }

    const handleForgotPassword = () => {
        navigate('/forgotPassword', { state: { email } })
    }

    const handleToggleShow = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)

    }


    return (
        <div className='flex justify-center items-center'>
            <title>Login</title>
            <div className='flex justify-center items-center shadow-2xl rounded-2xl md:w-[50%]'>
                
                <div className='w-[350px] h-fit py-3'>
                    <div className="card bg-base-100 w-full max-w-sm ">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className='text-2xl text-center font-bold'>Login your account</h1>
                            <hr className="border-gray-300 mt-4 w-[95%] mx-auto" />
                            <fieldset className="fieldset py-5">
                                <label className="label font-bold">Email Address</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)} name='email' type="email" className="input bg-base-200" placeholder="Enter your email address" required />

                                <label className="label font-bold">Password</label>
                                <div className='relative'>
                                    <input name='password'
                                        type={showPassword ? "text" : "password"}
                                        className="input bg-base-200" placeholder="Enter your password" required />
                                    <button onClick={handleToggleShow} className=" absolute top-3 right-7 z-10">{showPassword ? <FaRegEyeSlash size={20}/> : <FaRegEye size={20}/>}</button>
                                </div>


                                <div onClick={handleForgotPassword}><a className="link link-hover font-semibold">Forgot password?</a></div>

                                {
                                    error && <p className='text-red-700'>{error}</p>
                                }

                                <button type='submit' className="btn btn-primary mt-4">Login</button>
                                <div className="divider">OR Continue With</div>

                                <button
                                    onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                                    <FcGoogle size={24}></FcGoogle>
                                    Continue with Google
                                </button>

                                <h1 className='font-semibold py-2'>Dont’t Have An Account ? <Link to='/auth/registration' className='text-secondary'>Register</Link></h1>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;