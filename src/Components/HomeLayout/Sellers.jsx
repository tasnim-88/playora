import React from 'react';
import useToys from '../../Hooks/useToys';
import SellersCard from './SellersCard';

const Sellers = () => {
    const { data } = useToys()

    const featuredSellers=data.slice(0,3)
    return (
        <div className='mt-10'>
            <h1 className='text-2xl font-bold mb-5 px-5'>Top Sellers</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    featuredSellers.map(seller => <SellersCard key={seller.toyId} seller={seller}></SellersCard>)
                }
            </div>
        </div>
    );
};

export default Sellers;