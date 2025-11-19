import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import useToys from '../Hooks/useToys';
import Loading from './Loading';

const Terms = () => {

    const { loading } = useToys();

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <title>Terms & Conditions</title>
            <header >
                <Navbar></Navbar>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-10">
                <section className="mt-10 bg-white rounded-2xl shadow-md p-8">
                    <h1 className="text-3xl font-bold text-center mb-6 text-[#FF8A00]">
                        Terms & Conditions
                    </h1>

                    <p className="text-gray-700 mb-4">
                        Welcome to <strong>Playora</strong>! By accessing or purchasing from
                        our website, you agree to the following terms and conditions. Please
                        read them carefully before using our platform.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">
                                1. Use of Website
                            </h2>
                            <p className="text-gray-700">
                                You must be at least 18 years old or have parental permission to
                                make a purchase from Playora. You agree to use our website only
                                for lawful and ethical purposes.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">
                                2. Product Details
                            </h2>
                            <p className="text-gray-700">
                                We aim to provide accurate descriptions, prices, and images of our
                                toys. However, minor variations in color or packaging may occur.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">
                                3. Payments & Pricing
                            </h2>
                            <p className="text-gray-700">
                                All prices listed on Playora are in local currency. Orders are
                                processed after full payment is confirmed through secure channels.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">
                                4. Shipping & Returns
                            </h2>
                            <p className="text-gray-700">
                                Delivery times may vary based on location. Returns are accepted
                                within 7 days for defective or damaged items, provided they are in
                                original packaging.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">
                                5. Intellectual Property
                            </h2>
                            <p className="text-gray-700">
                                All images, logos, and content on Playora are owned by us and may
                                not be used or reproduced without permission.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">
                                6. Limitation of Liability
                            </h2>
                            <p className="text-gray-700">
                                Playora is not liable for indirect or incidental damages arising
                                from the use of our website or products.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">
                                7. Updates to Terms
                            </h2>
                            <p className="text-gray-700">
                                These Terms & Conditions may be updated periodically. Continued
                                use of Playora implies acceptance of the updated terms.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <footer className='bg-orange-100'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Terms;