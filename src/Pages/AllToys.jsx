import React from 'react';
import useToys from '../Hooks/useToys';
import ToyCard from '../Components/HomeLayout/ToyCard';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AllToys = () => {
    const { data } = useToys()
    return (
        <div>
            <title>Shop</title>
            <header className=''>
                <Navbar></Navbar>
            </header>
            <div className='max-w-11/12 mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-0'>
                {
                    data.map(toy => <ToyCard toy={toy}></ToyCard>)
                }
            </div>
            <footer className='bg-orange-100'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllToys;