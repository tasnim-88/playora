import React from 'react';

const testimonials = [
    {
        id: 1,
        name: "Sarah J.",
        role: "Mom & Toy Enthusiast",
        message:
            "I love finding unique, handcrafted toys for my kids on Playora. It's so much better than the big box stores, and I get to support local families!",
        image: "https://img.icons8.com/?size=96&id=23256&format=png",
    },
    {
        id: 2,
        name: "David M.",
        role: "Father of Two",
        message:
            "Playora has made toy shopping so easy! The quality is amazing, and my kids absolutely love every toy we’ve bought.",
        image: "https://img.icons8.com/?size=96&id=80850&format=png",
    },
    {
        id: 3,
        name: "Emily R.",
        role: "Preschool Teacher",
        message:
            "As a teacher, I appreciate how educational and creative these toys are. Playora’s collection is perfect for developing young minds.",
        image: "https://img.icons8.com/?size=96&id=23259&format=png",
    },
];

const Community = () => {
    return (
        <div>
            <section className=" py-12">
                <div className="max-w-6xl mx-auto ">
                    <h2 className="text-2xl font-bold mb-8 px-3">
                        From Our Community
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map(({ id, name, role, message, image }) => (
                            <div
                                key={id}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <p className="text-gray-600 italic mb-4 leading-relaxed">
                                    “{message}”
                                </p>
                                <div className="flex items-center gap-3 mt-4">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="w-10 h-10 rounded-full border border-gray-200"
                                    />
                                    <div>
                                        <p className="font-medium text-gray-800">{name}</p>
                                        <p className="text-sm text-gray-500">{role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Community;