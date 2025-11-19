import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import useToys from '../Hooks/useToys';
import Loading from './Loading';

const Policy = () => {

    const { loading } = useToys();

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <title>Privacy Policy</title>
            <header >
                <Navbar></Navbar>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-10">
                <section className="mt-10 bg-white rounded-2xl shadow-md p-8">
                    <h1 className="text-3xl font-bold text-center mb-6 text-[#FF8A00]">
                        Privacy Policy
                    </h1>

                    <p className="text-gray-700 mb-4">
                        At <strong>Playora</strong>, we value your privacy and are committed
                        to protecting your personal information. This policy explains how we
                        collect, use, and safeguard your data.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">
                                1. Information We Collect
                            </h2>
                            <p className="text-gray-700">
                                We collect personal details such as your name, email, address, and
                                payment information when you make a purchase or contact us. We
                                also gather non-personal data like browser type and usage patterns
                                to improve user experience.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">
                                2. How We Use Your Information
                            </h2>
                            <p className="text-gray-700">
                                Your information helps us process orders, provide customer
                                support, and personalize your shopping experience. We never sell
                                or rent your information to third parties.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">
                                3. Data Security
                            </h2>
                            <p className="text-gray-700">
                                We use secure servers and encryption technologies to protect your
                                data. However, no online system is completely immune to breaches.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">4. Cookies</h2>
                            <p className="text-gray-700">
                                Playora uses cookies to enhance your browsing experience and track
                                site performance. You can disable cookies through your browser
                                settings if you prefer.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">
                                5. Children’s Privacy
                            </h2>
                            <p className="text-gray-700">
                                Playora is family-friendly. We do not knowingly collect personal
                                information from children under 13. Parents can contact us to
                                request data deletion if needed.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">6. Your Rights</h2>
                            <p className="text-gray-700">
                                You may request access, correction, or deletion of your personal
                                data. You can also unsubscribe from marketing communications at
                                any time.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">
                                7. Policy Updates
                            </h2>
                            <p className="text-gray-700">
                                This Privacy Policy may be updated from time to time. The latest
                                version will always be available on this page.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-[#FF8A00]">8. Contact Us</h2>
                            <p className="text-gray-700">
                                If you have any questions about our privacy practices, please
                                reach out at{" "}
                                <a
                                    href="mailto:support@playora.com"
                                    className="text-[#FF8A00] font-semibold"
                                >
                                    support@playora.com
                                </a>
                                .
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

export default Policy;