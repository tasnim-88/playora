import React, { use } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
// import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { user, logOut } = use(AuthContext)
    // console.log(user);


    const handleLogout = () => {
        logOut().then(() => {
            toast.success('logout successfully');
            navigate(location.state ? location.state : '/')
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            toast.error(error.code);

        });
    }

    const links = <>
        <NavLink to={'/'}
            className={({ isActive }) =>
                `ml-3 px-3 py-2 rounded-md font-semibold transition-colors duration-200 ${isActive ? "text-white bg-orange-500" : "text-gray-700 hover:text-orange-500"
                }`
            }>
            Home</NavLink>
        <NavLink to={'/allToys'}
            className={({ isActive }) =>
                `ml-3 px-3 py-2 rounded-md font-semibold transition-colors duration-200 ${isActive ? "text-white bg-orange-500" : "text-gray-700 hover:text-orange-500"
                }`
            }>
            Shop</NavLink>
        <NavLink to={'/review'}
            className={({ isActive }) =>
                `ml-3 px-3 py-2 rounded-md font-semibold transition-colors duration-200 ${isActive ? "text-white bg-orange-500" : "text-gray-700 hover:text-orange-500"
                }`
            }>
            Review</NavLink>
        <NavLink to={'/profile'}
            className={({ isActive }) =>
                `ml-3 px-3 py-2 rounded-md font-semibold transition-colors duration-200 ${isActive ? "text-white bg-orange-500" : "text-gray-700 hover:text-orange-500"
                }`
            }>
            My Profile</NavLink>
    </>

    return (
        <div className="navbar shadow-sm bg-[#FFECC0]">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className='flex justify-center items-center gap-2'>
                    <img src="https://img.icons8.com/?size=60&id=nCw0587tiM_W&format=png" alt="" />
                    <h1 className=" text-xl font-bold">Playora</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <img title={user?.displayName} className='w-10 rounded-full' src={`${user && user.photoURL}`} alt="" />
                {
                    user ? <Link onClick={handleLogout} className='btn rounded-full bg-[#F97316] hover:bg-[#ea580c] text-white font-medium'>LogOut</Link>
                        : <Link to={'/auth/login'} className="btn rounded-full bg-[#F97316] hover:bg-[#ea580c] text-white font-medium">LogIn</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;