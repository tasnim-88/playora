import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Banner from '../Components/Banner';
import PopularToys from '../Components/HomeLayout/PopularToys';
import Sellers from '../Components/HomeLayout/Sellers';
import Community from '../Components/HomeLayout/Community';
import useToys from '../Hooks/useToys';
import Loading from '../Pages/Loading';
import Home from '../Pages/Home';

const HomeLayout = () => {

    const { loading } = useToys();

    if (loading) {
        return <Loading />;
    }

    return (
        <div className=''>
            <Home></Home>
        </div>
    );
};

export default HomeLayout;