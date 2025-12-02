// import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const ToyDetailsCard = ({ toy }) => {

    // const [quantity, setQuantity] = useState(1);

    if (!toy) return null

    const {
        toyName,
        pictureURL,
        price,
        rating,
        sellerName,
        description,
        subCategory,
        availableQuantity,
        sellerEmail,
    } = toy;

    const handleForm = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value

        if(!name || !email){
            toast.error('Please fill the form!')
            return
        }
        toast.success("Form Submitted Successfully!")
        e.target.reset()

    }


    return (
        <div className="max-w-6xl mx-auto p-6 md:flex gap-10 mt-10 bg-base-200 rounded-3xl shadow-lg">
            {/* LEFT: IMAGE */}
            <div className="md:w-1/2 flex justify-center items-start">
                <img
                    src={pictureURL}
                    alt={toyName}
                    className="w-80 h-80 object-contain p-4"
                />
            </div>

            {/* RIGHT: DETAILS */}
            <div className="md:w-1/2 space-y-3">
                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-900">{toyName}</h2>
                <p className="font-semibold">Category: {subCategory}</p>
                <p className="font-semibold">Available: {availableQuantity}</p>

                {/* Price */}
                <p className="text-2xl text-[#00A97F] font-semibold">Price: ${price}</p>

                {/* Rating */}
                <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}
                        />
                    ))}
                    <span className="ml-2 text-gray-700 text-sm">{rating} (123 reviews)</span>
                </div>

                {/* Seller Info */}
                <div className=" flex items-center justify-between bg-gray-50 space-y-2">
                    <div>
                        <p className="text-gray-800 font-semibold">Seller: {sellerName}</p>
                        <p className="text-gray-800 font-semibold">Email: {sellerEmail}</p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed"><span className="font-bold">Description:</span> {description}</p>

                {/* Quantity & Add to Cart */}
                {/* <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                        <button
                            className="px-3 py-2 bg-gray-100 text-gray-700"
                            onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                        >
                            -
                        </button>
                        <span className="px-4 text-lg font-semibold">{quantity}</span>
                        <button
                            className="px-3 py-2 bg-gray-100 text-gray-700"
                            onClick={() => setQuantity((q) => q + 1)}
                        >
                            +
                        </button>
                    </div>

                    <button className="flex-1 bg-[#FF00A8] hover:bg-[#e00092] text-white py-3 rounded-lg font-medium shadow-md transition">
                        Add to Cart
                    </button>

                    <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                        ❤️
                    </button>
                </div> */}

                {/* Try Now In-Store Form */}
                <div className=" p-5 rounded-2xl bg-base-300 mt-8">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">
                        Try Now In–Store!
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Schedule a time to try this toy at your local store. We’ll get everything ready for you!
                    </p>

                    <form onSubmit={handleForm} className="space-y-3">
                        <div className="flex flex-col md:flex-row gap-3">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full bg-base-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#00A97F] outline-none"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="your_email@example.com"
                                className="w-full bg-base-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#00A97F] outline-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#00A97F] hover:bg-[#008C6A] text-white py-3 rounded-lg font-semibold transition"
                        >
                            Try Now
                        </button>
                        <ToastContainer position="top-center"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ToyDetailsCard;
