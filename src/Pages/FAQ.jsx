import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaQuestionCircle } from 'react-icons/fa';
import useToys from '../Hooks/useToys';
import Loading from './Loading';
import { Link } from 'react-router';

const FAQ = () => {

    const { loading } = useToys();

    if (loading) {
        return <Loading />;
    }

    const faqs = [
        {
            question: "What is Playora?",
            answer:
                "Playora is your trusted online toy store offering a wide variety of fun, educational, and creative toys for kids of all ages. We partner with reliable local sellers to ensure quality and affordability.",
        },
        {
            question: "How can I place an order?",
            answer:
                "Simply browse through our shop, select your favorite toys, and click 'Add to Cart.' Once ready, proceed to checkout and complete your purchase securely.",
        },
        {
            question: "Do you offer home delivery?",
            answer:
                "Yes! Playora provides fast and reliable home delivery across Bangladesh. Delivery time typically ranges from 2–5 business days depending on your location.",
        },
        {
            question: "Can I return a product?",
            answer:
                "We accept returns within 7 days of delivery for damaged or defective products. Please ensure the item is in its original packaging and contact our support team for assistance.",
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept secure online payments via debit/credit cards, mobile banking (bKash, Nagad, Rocket), and cash on delivery in select areas.",
        },
        {
            question: "Are all toys safe for children?",
            answer:
                "Yes. Every toy listed on Playora meets child safety standards. We ensure all items are non-toxic, durable, and suitable for their recommended age group.",
        },
        {
            question: "Can I track my order?",
            answer:
                "Absolutely. Once your order ships, we’ll send you an email or SMS with your tracking information so you can follow your package’s journey.",
        },
        {
            question: "Do you offer discounts or promotions?",
            answer:
                "Yes! We frequently run seasonal discounts and flash sales. Subscribe to our newsletter or follow Playora on social media to stay updated.",
        },
        {
            question: "How do I contact customer support?",
            answer:
                "You can reach our friendly support team at support@playora.com or through the contact form available on our website. We typically reply within 24 hours.",
        },
    ];


    return (
        <div>
            <title>FAQ</title>
            <header className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-10">
                <section className="mt-10 bg-white rounded-2xl shadow-md p-8">
                    <div className="text-center mb-8">
                        <FaQuestionCircle className="text-[#FF8A00] text-5xl mx-auto mb-3" />
                        <h1 className="text-3xl font-bold text-[#FF8A00]">Frequently Asked Questions</h1>
                        <p className="text-gray-600 mt-2">
                            Find answers to the most common questions about shopping with Playora.
                        </p>
                    </div>

                    <div className="divide-y divide-gray-200">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group py-4 cursor-pointer transition-all"
                            >
                                <summary className="flex justify-between items-center text-lg font-medium text-gray-800 hover:text-[#FF8A00]">
                                    {faq.question}
                                    <span className="ml-3 transition-transform group-open:rotate-180">
                                        ▼
                                    </span>
                                </summary>
                                <p className="mt-2 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-gray-700">
                            Still have questions?{" "}
                            <Link
                                to={'/contactUs'}
                                className="text-[#FF8A00] font-semibold hover:underline"
                            >
                                Contact us
                            </Link>{" "}
                            and we’ll be happy to help!
                        </p>
                    </div>
                </section>
            </div>
            <footer className='bg-orange-100'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default FAQ;