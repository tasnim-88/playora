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

const HomeLayout = () => {

    const { loading } = useToys();

    if (loading) {
        return <Loading />;
    }

    return (
        <div className=''>
            <header >
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
            <main className='max-w-11/12 mx-auto mt-10'>
                <PopularToys></PopularToys>
                <Sellers></Sellers>
                <Community></Community>
            </main>
            <footer className='bg-orange-100'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;