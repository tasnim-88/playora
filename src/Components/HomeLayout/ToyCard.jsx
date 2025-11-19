import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ToyCard = ({ toy }) => {
    const { toyName, rating, pictureURL, availableQuantity, price,toyId } = toy
    return (
        <div className=" bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center">
            {/* Thumbnail */}
            <div className="bg-[#FFF3E6] w-full h-48 flex justify-center items-center rounded-xl mb-4">
                <img
                    src={pictureURL}
                    alt={toyName}
                    className="w-40 h-40 object-contain hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Toy Details */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center line-clamp-1">
                {toyName}
            </h3>

            <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                <FaStar /> <span className="text-gray-700">{rating}</span>
            </div>

            <p className="text-sm text-gray-600 mb-1">
                Available: <span className="font-medium">{availableQuantity}</span>
            </p>

            <p className="text-lg font-semibold text-[#FF7A00] mb-3">${price}</p>

            {/* View More Button */}
            <Link to={`/toyDetails/${toyId}`} className="w-full">
                <button className="w-full bg-[#FF8A00] hover:bg-[#FF6A00] text-white font-medium py-2 rounded-lg transition-colors duration-300">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default ToyCard;