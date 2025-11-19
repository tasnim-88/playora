import React from 'react';
import sellerImg from '../../assets/user.png'
import { Link } from 'react-router';

const SellersCard = ({ seller }) => {
    const { sellerName, sellerEmail } = seller
    return (
        <div className=" bg-white rounded-3xl shadow-md p-6 text-center border border-gray-100">
            {/* Image */}
            <img
                src={sellerImg}
                alt={sellerImg}
                className="w-20 h-20 rounded-full mx-auto object-cover mb-4"
            />

            {/* Name & Tagline */}
            <h3 className="text-lg font-semibold text-gray-900">{sellerName}</h3>
            <p className="text-gray-500 text-sm mb-5">{sellerEmail}</p>

            {/* Button */}
            <Link
                to={'/allToys'}
                className="inline-block bg-[#F97316] hover:bg-[#ea580c] text-white font-medium py-2 px-5 rounded-full transition-all duration-200"
            >
                Visit Shop
            </Link>
        </div>
    );
};

export default SellersCard;