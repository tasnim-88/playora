import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useToys from '../Hooks/useToys';
import { Link } from 'react-router';

const Banner = () => {
    const { data } = useToys();

    // Ensure data is available
    if (!data || data.length === 0) {
        return <div className="text-center py-10">Loading toys...</div>;
    }

    // Show only first 5 (or fewer) toys
    const featuredToys = [...data].sort(() => 0.5 - Math.random()).slice(0, 5);


    return (
        <div className="overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                className="h-[670px] md:h-[450px]"
            >
                {featuredToys.map((toy) => (
                    <SwiperSlide key={toy.toyId}>
                        <div className="flex flex-col md:flex-row justify-between items-center h-full bg-linear-to-r from-[#FFECC0] to-[#FFC29B] px-20 py-6">
                            <div className="max-w-md text-center md:text-left">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                                    {toy.toyName}
                                </h1>
                                <p className="text-gray-700 mb-3">{toy.description}</p>
                                <p className="text-[#FF7A00] font-semibold mb-2">
                                    Price: ${toy.price}
                                </p>
                                <p className="text-sm text-gray-600 mb-3">
                                    Rating: ⭐ {toy.rating} | Available: {toy.availableQuantity}
                                </p>
                                <Link to={`/toyDetails/${toy.toyId}`} className="btn bg-[#FF8A00] hover:bg-[#FF7300] text-white">
                                    Discover Toys
                                </Link>
                            </div>

                            <div className="mt-6 md:mt-0">
                                <img
                                    src={toy.pictureURL}
                                    alt={toy.toyName}
                                    className="w-72 h-72 object-contain drop-shadow-lg"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
