import React from 'react';
import useToys from '../../Hooks/useToys';
import ToyCard from './ToyCard';
import { NavLink } from 'react-router';
import Loading from '../../Pages/Loading';

const PopularToys = () => {
    const { data } = useToys()

    if (!data || data.length === 0) {
        return <Loading></Loading>
    }
    const featuredToys = data.slice(0, 6);


    return (
        <div>
            <div className='flex justify-between items-center px-5 mb-5'>
                <h1 className='text-2xl font-bold'>Popular Toys</h1>
                <NavLink to={'/allToys'} className={'text-[18px] text-blue-500 link'}>See More</NavLink>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-0'>
                {
                    featuredToys.map(toy => <ToyCard key={toy.toyId} toy={toy}></ToyCard>)
                }
            </div>

        </div>
    );
};

export default PopularToys;