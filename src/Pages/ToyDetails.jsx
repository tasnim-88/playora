import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import useToys from '../Hooks/useToys';
import ToyDetailsCard from './ToyDetailsCard';
import { useParams } from 'react-router';
import Footer from '../Components/Footer';

const ToyDetails = () => {
    const { toyId } = useParams()
    const { data } = useToys()
    const [toy,setToy]=useState({})
    // console.log(toyId,toy);
    

    useEffect(() => {
        const details = data.find((singleToy) => singleToy.toyId == toyId)
        setToy(details)
    }, [data, toyId])



    return (
        <div>
            <title>Details</title>
            <header className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </header>
            {/* Details */}
            <main>
                {
                    <ToyDetailsCard toy={toy}></ToyDetailsCard>
                }
            </main>
            <footer className=' bg-orange-100'>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default ToyDetails;