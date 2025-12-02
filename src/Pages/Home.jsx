import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import PopularToys from '../Components/HomeLayout/PopularToys';
import Sellers from '../Components/HomeLayout/Sellers';
import Community from '../Components/HomeLayout/Community';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
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

export default Home;