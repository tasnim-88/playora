import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import useToys from '../Hooks/useToys';
import Loading from '../Pages/Loading';

const Authentication = () => {
    const { loading } = useToys();

    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <header className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </header>
            <main className='max-w-11/12 mx-auto mt-5'>
                <Outlet></Outlet>
            </main>
            <footer className='bg-orange-100'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Authentication;