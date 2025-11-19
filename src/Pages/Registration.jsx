import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';


const Registration = () => {

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const { createUser, setUser, updateUser, googleLogin } = use(AuthContext)

    // const [error, setError] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        // console.log(name, email, photo, password);

        // ✅ Password validation rules
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        if (!hasUppercase) {
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }
        if (!hasLowercase) {
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }
        if (!isLongEnough) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }

        // ✅ Clear any previous error
        // setError('');


        createUser(email, password)
            .then(result => {
                const user = result.user
                // console.log(user);
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        toast.success("Registration successful!")
                        navigate("/")
                    })
                    .catch((error) => {
                        // console.log(error);
                        setUser(user)
                    })
            })
            .catch(error => {
                const errorCode = error.code
                // console.log(errorCode);
                // setError(errorCode)
                toast.error(errorCode);

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

    const handleToggleShow = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)

    }

    return (
        <div className='flex justify-center items-center'>
            <title>Registration</title>
            <div className='flex justify-center items-center md:w-[50%] shadow-2xl rounded-2xl'>
                
                <div className='w-[400px] md:w-[500px] py-3'>
                    <div className="card bg-base-100  ">
                        <form onSubmit={handleRegister} className="card-body p-10">
                            <h1 className='text-2xl text-center font-bold'>Register your account</h1>
                            <hr className="border-gray-300 mt-4 w-[95%] mx-auto" />
                            <fieldset className="fieldset  ">
                                <label className="label font-bold">Your Name</label>
                                <input type="text" name="name" id="" placeholder='Enter your name' className='input bg-base-200 w-full' required />

                                <label className="label font-bold">Photo Url</label>
                                <input type="url" name="photo" id="" className="input bg-base-200 w-full" placeholder='Enter url' required />

                                <label className="label font-bold">Email Address</label>
                                <input name='email' type="email" className="input bg-base-200 w-full" placeholder="Enter your email address" required />

                                <label className="label font-bold">Password</label>
                                <div className='relative'>
                                    <input name='password'
                                        type={showPassword ? "text" : "password"}
                                        className="input bg-base-200 w-full" placeholder="Enter your password" required />
                                    <button onClick={handleToggleShow} className=" absolute top-3 right-7 z-10">{showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}</button>
                                </div>

                                {/* {error && (
                                    <p className="text-red-500 text-sm mt-2">{error}</p>
                                )} */}

                                <button type='submit' className="btn btn-primary mt-4">Register</button>
                                <div className="divider">OR Continue With</div>
                                <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                                    <FcGoogle size={24}></FcGoogle>
                                    Continue with Google
                                </button>
                                <h1 className='font-semibold py-2'>Already Have An Account ? <Link to='/auth/login' className='text-secondary'>Login</Link></h1>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;